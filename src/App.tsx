import { useState, useRef } from 'react';
import { QUESTIONS } from './data/questions';
import type { AnswerType, CalculationResult } from './types';
import { calculateResults } from './utils/scoring';
import { sound } from './utils/sound';
import { BackgroundSky } from './components/BackgroundSky';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { IntroCard } from './components/IntroCard';
import { QuestionCard } from './components/QuestionCard';
import { QuestionNavigator } from './components/QuestionNavigator';
import { ResultView } from './components/ResultView';
import { ErrorBoundary } from './components/ErrorBoundary';

type AppStep = 'INTRO' | 'QUIZ' | 'RESULT';

export function App() {
  const [step, setStep] = useState<AppStep>('INTRO');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerType>>({});
  const answersRef = useRef<Record<number, AnswerType>>({});
  const [soundEnabled, setSoundEnabled] = useState(sound.enabled);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleToggleSound = () => {
    const isNowEnabled = sound.toggleSound();
    setSoundEnabled(isNowEnabled);
  };

  const handleStart = () => {
    answersRef.current = {};
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResult(null);
    setStep('QUIZ');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    answersRef.current = {};
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResult(null);
    setStep('INTRO');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showResultsIfReady = (latestAnswers: Record<number, AnswerType>) => {
    const answeredCount = Object.keys(latestAnswers).filter(
      (k) => latestAnswers[Number(k)] === 'YES' || latestAnswers[Number(k)] === 'NO'
    ).length;

    if (answeredCount >= QUESTIONS.length) {
      const res = calculateResults(latestAnswers);
      setResult(res);
      setStep('RESULT');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return true;
    }
    return false;
  };

  const handleAnswer = (ans: AnswerType, questionId: number) => {
    // 1. Immediately record answer in both ref (synchronous) and state (reactive)
    answersRef.current = { ...answersRef.current, [questionId]: ans };
    const updatedAnswers = { ...answersRef.current };
    setAnswers(updatedAnswers);

    // 2. Determine next step
    if (currentQuestionIndex + 1 < QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Reached Question 11! Check if all questions are answered
      const isComplete = showResultsIfReady(updatedAnswers);

      if (!isComplete) {
        // If some earlier question was skipped during backtracking, find the first unanswered question
        const firstUnansweredIdx = QUESTIONS.findIndex(
          (q) => !updatedAnswers[q.id]
        );
        if (firstUnansweredIdx !== -1) {
          setCurrentQuestionIndex(firstUnansweredIdx);
        }
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleSelectQuestion = (index: number) => {
    if (index >= 0 && index < QUESTIONS.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const allAnsweredCount = Object.keys(answers).filter(
    (k) => answers[Number(k)] === 'YES' || answers[Number(k)] === 'NO'
  ).length;
  const isAllAnswered = allAnsweredCount >= QUESTIONS.length;

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col relative pb-safe">
        {/* Whimsical Ghibli animated sky backdrop */}
        <BackgroundSky />

        {/* Main App Navigation Header */}
        <Header
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onReset={handleReset}
          showReset={step !== 'INTRO'}
        />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col justify-center py-2 sm:py-6">
          {step === 'INTRO' && <IntroCard onStart={handleStart} />}

          {step === 'QUIZ' && (
            <div className="w-full flex flex-col items-center">
              <ProgressBar
                current={currentQuestionIndex + 1}
                total={QUESTIONS.length}
              />

              {/* Quick Jump / Backtrack Navigator */}
              <QuestionNavigator
                currentIndex={currentQuestionIndex}
                total={QUESTIONS.length}
                answers={answers}
                onSelectQuestion={handleSelectQuestion}
              />

              <QuestionCard
                question={QUESTIONS[currentQuestionIndex]}
                selectedAnswer={answers[QUESTIONS[currentQuestionIndex].id]}
                onAnswer={handleAnswer}
                onPrev={handlePrev}
                onNext={handleNext}
                canPrev={currentQuestionIndex > 0}
                canNext={currentQuestionIndex + 1 < QUESTIONS.length}
                totalQuestions={QUESTIONS.length}
                allAnswered={isAllAnswered}
                onViewResults={() => showResultsIfReady(answersRef.current)}
              />
            </div>
          )}

          {step === 'RESULT' && result && (
            <ResultView result={result} onRetake={handleStart} />
          )}

          {step === 'RESULT' && !result && (
            <div className="w-full max-w-md mx-auto p-6 parchment-card text-center">
              <p className="text-sm text-ghibli-brown">Calculating results...</p>
            </div>
          )}
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
