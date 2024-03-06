// components/Pagination.js
import React from "react";

const Pagination = ({ totalItems, itemsPerPage, activePage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      {pages.map((page) => (
        <button
          className="btn btn-primary"
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === activePage}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
