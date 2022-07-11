import styles from './Molecule.MoviesFilter.module.scss';

import React from 'react';
import classNames from 'classnames';

function MoviesFilter({ genres, selectedGenre, onSelectGenre }) {
  const getClassName = (genre) =>
    classNames(styles.item, {
      [styles['item--active']]: genre === selectedGenre,
    });

  return (
    <ul className={styles.container}>
      {genres.map((genre) => (
        <li
          className={getClassName(genre)}
          key={genre}
          onClick={() => onSelectGenre(genre)}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
}

export default MoviesFilter;
