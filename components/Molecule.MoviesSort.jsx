import styles from './Molecule.MoviesSort.module.scss';

import React from 'react';

import Button from './Atom.Button';
import { DIRECTION } from '../constants/movies';

function MoviesSort({
  sorts,
  selectedSort,
  sortOrder,
  onSelectSort,
  onToggleSortOrder,
}) {
  const handleSortChange = (e) => onSelectSort(e.target.value);

  return (
    <div className={styles.container}>
      <div className={styles.label}>SORT BY:</div>
      <div>
        <select
          className={styles.select}
          value={selectedSort}
          onChange={handleSortChange}
        >
          {Object.keys(sorts).map((sort) => (
            <option value={sort} key={sort}>
              {sorts[sort]}
            </option>
          ))}
        </select>
      </div>
      <Button style="icon" onClick={onToggleSortOrder}>
        {sortOrder === DIRECTION.desc ? '↓' : '↑'}
      </Button>
    </div>
  );
}

export default MoviesSort;
