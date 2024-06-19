// src/redux/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '81dc4541adb04d97aaecd0fa9cbbf458'; // Replace with your actual News API key

// Thunk to fetch news articles
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ category, page }, { rejectWithValue }) => {
    try {
      const response = await axios.get(NEWS_API_URL, {
        params: {
          category,
          page,
          apiKey: API_KEY,
        },
      });
      return response.data.articles;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    category: 'general',
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setCategory, setCurrentPage } = newsSlice.actions;

export default newsSlice.reducer;

