import { calculateResults } from '../utils/scoring';
import { QUESTIONS } from '../data/questions';
import type { AnswerType } from '../types';

// Simulate test and log output
const answers: Record<number, AnswerType> = {};
QUESTIONS.forEach(q => answers[q.id] = 'YES');

const result = calculateResults(answers);
console.log('Calculation successful:', result.topCommittees.length, 'winners');
console.log('Top winner key:', result.topCommittees[0].key);
console.log('Ranked count:', result.allRanked.length);
