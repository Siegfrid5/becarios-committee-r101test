import { useState } from 'react';
import { QUESTIONS } from './data/questions';
import type { AnswerType, CalculationResult } from './types';
import { calculateResults } from './utils/scoring';
import { sound } from './utils/sound';
import { BackgroundSky } from './components/BackgroundSky';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { IntroCard } from './components/IntroCard';
import { QuestionCard } from './components/QuestionCard';
import { ResultView } from './components/ResultView';

type AppStep = 'INTRO' | 'QUIZ' | 'RESULT';

export function App() {
  const [step, setStep] = useState<AppStep>('INTRO');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerType>>({});
  const [soundEnabled, setSoundEnabled] = useState(sound.enabled);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleToggleSound = () => {
    const isNowEnabled = sound.toggleSound();
    setSoundEnabled(isNowEnabled);
  };

  const handleStart = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResult(null);
    setStep('QUIZ');
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResult(null);
    setStep('INTRO');
  };

  const handleAnswer = (ans: AnswerType) => {
    const currentQ = QUESTIONS[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQ.id]: ans };
    setAnswers(newAnswers);

    if (currentQuestionIndex + 1 < QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Completed all 11 questions! Compute results
      const res = calculateResults(newAnswers);
      setResult(res);
      setStep('RESULT');
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  return (
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
            <QuestionCard
              question={QUESTIONS[currentQuestionIndex]}
              selectedAnswer={answers[QUESTIONS[currentQuestionIndex].id]}
              onAnswer={handleAnswer}
              onPrev={handlePrev}
              canPrev={currentQuestionIndex > 0}
              totalQuestions={QUESTIONS.length}
            />
          </div>
        )}

        {step === 'RESULT' && result && (
          <ResultView result={result} onRetake={handleStart} />
        )}
      </main>
    </div>
  );
}

export default App;
