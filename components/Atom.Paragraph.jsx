import styles from './Atom.Paragraph.module.scss';

import React from 'react';
import classNames from 'classnames';

function Paragraph({ style, children }) {
  const className = classNames(styles.paragraph, styles[`paragraph--${style}`]);

  return <p className={className}>{children}</p>;
}

Paragraph.defaultProps = {
  style: 'primary',
};

export default Paragraph;
