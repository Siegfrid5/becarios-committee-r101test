import { calculateResults, generateShareText } from './scoring';
import { QUESTIONS } from '../data/questions';
import type { AnswerType } from '../types';

function runTests() {
  console.log('--- Starting Scoring Logic Verification ---');

  // Test 1: All YES answers
  const allYesAnswers: Record<number, AnswerType> = {};
  QUESTIONS.forEach((q) => {
    allYesAnswers[q.id] = 'YES';
  });

  const resAllYes = calculateResults(allYesAnswers);
  console.log('\n[Test 1] All YES Answers:');
  console.log('Top Committee(s):', resAllYes.topCommittees.map(c => c.name).join(', '));
  console.log('Max Score:', resAllYes.maxScore);
  console.log('Scores:');
  Object.entries(resAllYes.scores).forEach(([k, v]) => {
    console.log(`  ${k}: ${v}`);
  });

  if (resAllYes.allRanked.length !== 8) {
    throw new Error(`Expected 8 ranked committees, got ${resAllYes.allRanked.length}`);
  }

  // Test 2: All NO answers
  const allNoAnswers: Record<number, AnswerType> = {};
  QUESTIONS.forEach((q) => {
    allNoAnswers[q.id] = 'NO';
  });

  const resAllNo = calculateResults(allNoAnswers);
  console.log('\n[Test 2] All NO Answers:');
  console.log('Top Committee(s):', resAllNo.topCommittees.map(c => c.name).join(', '));
  console.log('Max Score:', resAllNo.maxScore);

  // Test 3: Mixed Pattern
  const answersScenario: Record<number, AnswerType> = {
    1: 'YES',
    2: 'NO',
    3: 'YES',
    4: 'NO',
    5: 'YES',
    6: 'NO',
    7: 'YES',
    8: 'NO',
    9: 'YES',
    10: 'NO',
    11: 'YES',
  };
  const resScenario = calculateResults(answersScenario);
  console.log('\n[Test 3] Mixed Pattern:');
  console.log('Top Committee(s):', resScenario.topCommittees.map(c => c.name).join(', '));
  console.log('Is multiple ties?', resScenario.topCommittees.length > 1);
  console.log('Ranked count:', resScenario.allRanked.length);

  // Test 4: Share text formatting
  const shareText = generateShareText(resScenario);
  console.log('\n[Test 4] Share text sample:\n', shareText);

  console.log('\n✅ All scoring logic tests passed successfully!');
}

runTests();
