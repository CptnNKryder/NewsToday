// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newSlice';

export const Store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
