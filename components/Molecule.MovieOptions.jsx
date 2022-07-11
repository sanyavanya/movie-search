import styles from './Molecule.MovieOptions.module.scss';

import React from 'react';

import {
  BUTTON_OPTIONS,
  BUTTON_CLOSE,
  BUTTON_EDIT,
  BUTTON_DELETE,
} from '../constants/ui';

import Button from './Atom.Button';

function MovieOptions({ isOpen, setIsOpen, onMovieEdit, onMovieDelete }) {
  const handleOpenClick = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen && (
        <div className={styles.openButton}>
          <Button style="icon" onClick={handleOpenClick}>
            {BUTTON_OPTIONS}
          </Button>
        </div>
      )}
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.closeButton}>
            <Button style="icon" onClick={handleCloseClick}>
              {BUTTON_CLOSE}
            </Button>
          </div>
          <ul className={styles.list}>
            <li className={styles.listItem} onClick={onMovieEdit}>
              {BUTTON_EDIT}
            </li>
            <li className={styles.listItem} onClick={onMovieDelete}>
              {BUTTON_DELETE}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieOptions;
