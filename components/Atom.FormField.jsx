import styles from './Atom.FormField.module.scss';

import React from 'react';

function FormField({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default FormField;
