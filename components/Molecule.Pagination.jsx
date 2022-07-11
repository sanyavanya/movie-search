import styles from './Molecule.Pagination.module.scss';

import React, { useMemo } from 'react';

import Button from './Atom.Button';

import { PAGE_NUMBER_FIRST } from '../constants/movies';
import { BUTTON_PREVIOUS, BUTTON_NEXT } from '../constants/ui';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const isCurrentPageFirst = useMemo(
    () => currentPage === PAGE_NUMBER_FIRST,
    [currentPage]
  );
  const isCurrentPageLast = useMemo(
    () => currentPage === totalPages,
    [currentPage, totalPages]
  );

  const handlePreviousClick = () => {
    if (!isCurrentPageFirst) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (!isCurrentPageLast) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <Button
          style="secondary"
          disabled={isCurrentPageFirst}
          onClick={handlePreviousClick}
        >
          {BUTTON_PREVIOUS}
        </Button>
        <Button style="icon" disabled>
          {currentPage}
        </Button>
        <Button
          style="secondary"
          disabled={isCurrentPageLast}
          onClick={handleNextClick}
        >
          {BUTTON_NEXT}
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
