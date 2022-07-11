import styles from './Atom.Spinner.module.scss';

import React from 'react';

function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner} />
      </div>
    </div>
  );
}

export default Spinner;
