// src/components/CategoryFilter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setCurrentPage } from '../redux/newSlice';
import '../CategoryFilter.css'; // Adjusted import to correct CSS path

const categories = ['general', 'business', 'technology', 'entertainment'];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.news.category);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(setCurrentPage(1)); // Corrected action creator name
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={currentCategory === category ? 'active' : ''}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

