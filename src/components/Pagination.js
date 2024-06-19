import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/newSlice';
import '../Pagination.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.news.currentPage);
  const totalPages = 5; // Assuming a fixed number for simplicity

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

