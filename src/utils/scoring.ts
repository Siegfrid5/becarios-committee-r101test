import type { AnswerType, CalculationResult, CommitteeInfo, CommitteeKey, CommitteeScoreResult } from '../types';
import { COMMITTEES } from '../data/committees';
import { QUESTIONS } from '../data/questions';

export const INITIAL_SCORES: Record<CommitteeKey, number> = {
  ALUMNI_AFFAIRS: 0,
  RESEARCH_AND_EVALUATIONS: 0,
  OPERATIONS: 0,
  WAYS_AND_MEANS: 0,
  MEMBERSHIPS_AND_COMMUNICATIONS: 0,
  CREATIVES: 0,
  DOCUMENTATIONS: 0,
  COMMUNITY_SERVICE: 0,
};

export function calculateResults(answers: Record<number, AnswerType>): CalculationResult {
  const scores: Record<CommitteeKey, number> = { ...INITIAL_SCORES };

  // Calculate score deltas from all answered questions
  QUESTIONS.forEach((q) => {
    const ans = answers[q.id];
    if (ans) {
      Object.keys(q.scores).forEach((key) => {
        const committeeKey = key as CommitteeKey;
        const delta = q.scores[committeeKey][ans];
        scores[committeeKey] += delta;
      });
    }
  });

  const committeeKeys = Object.keys(scores) as CommitteeKey[];
  const scoreValues = committeeKeys.map((k) => scores[k]);
  const maxScore = Math.max(...scoreValues);
  const minScore = Math.min(...scoreValues);

  // Top matching committees (can be 1 or multiple in case of tie)
  const topCommittees: CommitteeInfo[] = committeeKeys
    .filter((k) => scores[k] === maxScore)
    .map((k) => COMMITTEES[k]);

  // Sort all committees by score descending
  const sortedKeys = [...committeeKeys].sort((a, b) => scores[b] - scores[a]);

  // Calculate normalized match percentage
  // Theoretical range approx -100 to +100 depending on answer combos
  // We can calculate match rating relative to dynamic span
  const scoreSpan = Math.max(1, maxScore - minScore);

  let currentRank = 1;
  const allRanked: CommitteeScoreResult[] = sortedKeys.map((k, index) => {
    const score = scores[k];
    if (index > 0 && score < scores[sortedKeys[index - 1]]) {
      currentRank = index + 1;
    }

    // Relative match score between 40% and 99% for intuitive UI bar
    const normalized = Math.round(50 + ((score - (minScore + scoreSpan / 2)) / (scoreSpan || 1)) * 48);
    const clampedPercentage = Math.max(20, Math.min(99, normalized));

    return {
      committee: COMMITTEES[k],
      score,
      rank: currentRank,
      isTop: score === maxScore,
      matchPercentage: clampedPercentage,
    };
  });

  return {
    topCommittees,
    allRanked,
    scores,
    maxScore,
    minScore,
    answers,
  };
}

export function generateShareText(result: CalculationResult): string {
  const isMultiple = result.topCommittees.length > 1;
  const topNames = result.topCommittees.map((c) => `${c.name} (${c.archetype})`).join(' OR ');

  let text = `🧹 Kiki's Delivery Service: Becarios Committee Sorting Test 📦\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += isMultiple
    ? `✨ My Top Committee Matches: ${topNames}\n\n`
    : `✨ My Top Committee Match: ${topNames}\n\n`;

  result.topCommittees.forEach((c) => {
    text += `🏷️ ${c.name} — ${c.archetype}\n`;
    text += `💬 ${c.whyItFits}\n\n`;
  });

  text += `📊 Committee Score Ranking:\n`;
  result.allRanked.forEach((r) => {
    const sign = r.score > 0 ? `+${r.score}` : `${r.score}`;
    text += `#${r.rank} ${r.committee.name}: ${sign} pts\n`;
  });

  text += `\nFind your committee calling today! ✉️`;
  return text;
}
