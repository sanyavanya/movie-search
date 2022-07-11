import styles from './Atom.Heading.module.scss';

import React from 'react';

function Heading({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

export default Heading;
