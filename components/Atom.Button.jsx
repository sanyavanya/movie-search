import styles from './Atom.Button.module.scss';

import React from 'react';
import classNames from 'classnames';

function Button({ type, disabled, style, onClick, children }) {
  const className = classNames(styles.button, styles[`button--${style}`], {
    [styles['button--disabled']]: disabled,
  });

  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  style: 'primary',
};

export default Button;
