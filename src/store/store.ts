import { configureStore } from "@reduxjs/toolkit";
import jobReducer from './slices/jobSlice';
import pageNumberReducer from './slices/pageNumberSlice';

const store = configureStore({
  reducer: {
    jobList: jobReducer,
    pageNumber: pageNumberReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;