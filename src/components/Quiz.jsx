import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions } from '../store/quizSlice';
import QuizStart from './QuizStart';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import Questions from './Questions';
import Results from './Results';
import { sampleQuestions } from '../data/questions';

const Quiz = () => {
  const dispatch = useDispatch();

  //load the question
  useEffect(() => {
    dispatch(setQuestions(sampleQuestions));
  }, [dispatch]);
  const {
    questions,
    currentQuestionIndex,
    isQuizCompleted,
    isTimerActive,
    answers,
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

  //is completed Quiz
  if (isQuizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-8 px-4">
        <Results />
      </div>
    );
  }

  // Quiz start
  if (!isTimerActive && answers.length === 0) {
    console.log(!isTimerActive);
    console.log(answers.length);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-8 px-4">
        <QuizStart />
      </div>
    );
  }
  return (
    //Quiz component
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <ProgressBar />
            </div>
            <div className="md:ml-6">
              <Timer />
            </div>
          </div>
        </div>
      </div>
      <Questions />
    </div>
  );
};

export default Quiz;
