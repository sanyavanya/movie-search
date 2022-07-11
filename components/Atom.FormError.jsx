import styles from './Atom.FormError.module.scss';

import React from 'react';

function FormError({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default FormError;
