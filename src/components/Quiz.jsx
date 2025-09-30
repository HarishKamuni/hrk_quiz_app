import React from 'react';
import { useSelector } from 'react-redux';
import QuizStart from './QuizStart';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import Questions from './Questions';
import Results from './Results';

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    isQuizCompleted,
    isTimeActive,
    answer,
  } = useSelector((state) => state.quiz);

  // Loading Quiz
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading</p>
        </div>
      </div>
    );
  }
  return (
    <Results />
    // <Questions />
    // <Timer />
    // <ProgressBar />
    // <QuizStart />
    //Quiz component
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
    //   <div className="max-w-4xl mx-auto mb-8">
    //     <div className="bg-white rounded-xl shadow-lg p-6">
    //       <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
    //         <div className="flex-1">Quiz</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Quiz;
