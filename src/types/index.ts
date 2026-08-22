export type CommitteeKey =
  | 'ALUMNI_AFFAIRS'
  | 'RESEARCH_AND_EVALUATIONS'
  | 'OPERATIONS'
  | 'WAYS_AND_MEANS'
  | 'MEMBERSHIPS_AND_COMMUNICATIONS'
  | 'CREATIVES'
  | 'DOCUMENTATIONS'
  | 'COMMUNITY_SERVICE';

export type AnswerType = 'YES' | 'NO';

export interface ScoreDelta {
  YES: number;
  NO: number;
}

export interface Question {
  id: number;
  number: number;
  text: string;
  categoryHint?: string;
  scores: Record<CommitteeKey, ScoreDelta>;
}

export interface CommitteeInfo {
  key: CommitteeKey;
  name: string;
  archetype: string;
  themeSymbol: string;
  badgeTitle: string;
  whyItFits: string;
  whatYoullDo: string[];
  color: {
    primary: string;
    light: string;
    border: string;
    tagBg: string;
    tagText: string;
  };
}

export interface CommitteeScoreResult {
  committee: CommitteeInfo;
  score: number;
  rank: number;
  isTop: boolean;
  matchPercentage: number;
}

export interface CalculationResult {
  topCommittees: CommitteeInfo[];
  allRanked: CommitteeScoreResult[];
  scores: Record<CommitteeKey, number>;
  maxScore: number;
  minScore: number;
  answers: Record<number, AnswerType>;
}
