// src/components/ArticleDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../ArticleDetail.css';

const ArticleDetail = () => {
  const { url } = useParams();
  const article = useSelector((state) =>
    state.news.articles.find((article) => article.url === url)
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
