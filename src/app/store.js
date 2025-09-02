import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../features/questionSlice";
import tallyReducer from "../features/tallySlice"

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    tally: tallyReducer
  }
});
