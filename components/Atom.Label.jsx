import styles from './Atom.Label.module.scss';

import React from 'react';

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
}

export default Label;
