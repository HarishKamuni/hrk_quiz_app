import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  question: [],
  currentQuestionIndex: 0,
  answers: [],
  isQuizCompleted: false,
  score: 0,
  timeLeft: 300,
  isTimerActive: false,
  showExplaination: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
});

export default quizSlice.reducer;
