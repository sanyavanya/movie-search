import styles from './Atom.Error.module.scss';

import React from 'react';

function Error({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <div className={styles.bar1} />
        <div className={styles.bar2} />
      </div>
      <div className={styles.text}>{children}</div>
    </div>
  );
}

export default Error;
