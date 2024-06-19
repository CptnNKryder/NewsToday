// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, setCategory, setCurrentPage } from '../redux/newSlice';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import '../HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, error, currentPage, category } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews({ category, page: currentPage }));
  }, [dispatch, category, currentPage]);

  return (
    <div className="homepage">
      <CategoryFilter />
      {status === 'loading' && <p className="loading">Loading...</p>}
      {status === 'failed' && <p className="error">{error.message}</p>} {/* Render error message */}
      <div className="articles">
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default HomePage;


