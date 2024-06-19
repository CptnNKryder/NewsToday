// src/components/ArticleCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../ArticleCard.css';

const ArticleCard = ({ article }) => (
  <div className="article-card">
    <img src={article.urlToImage} alt={article.title} />
    <div className="article-content">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <Link to={`/article/${article.url}`}>Read more</Link>
    </div>
  </div>
);

export default ArticleCard;
