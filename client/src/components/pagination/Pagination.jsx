import React from 'react';
import './PaginationModules.css';

export default function Pagination({ countriesPerPage, totalCountries, currentPage, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const onPage = (n) => {
    setCurrentPage(n);
  }

  return (
    <article className='pagination' key={currentPage}>
      <button
        className={currentPage === 1 ? 'is_disabled' : 'prevNext'}
        onClick={onPrevPage}
      >Prev</button>
      <div>
        {pageNumbers.map(numPag =>
          <button
            key={numPag}
            className={numPag === currentPage ? 'is_current' : 'num'}
            onClick={() => onPage(numPag)}  // Pasa el número de página como argumento
          >
            {numPag}
          </button>
        )}
      </div>
      <button
        className={currentPage >= pageNumbers.length ? 'is_disabled' : 'prevNext'}
        onClick={onNextPage}
      >Next</button>
    </article>
  )
}
