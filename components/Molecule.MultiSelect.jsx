import styles from './Molecule.MultiSelect.module.scss';

import React, { useState } from 'react';
import classNames from 'classnames';

import FormError from './Atom.FormError';
import FormField from './Atom.FormField';
import Label from './Atom.Label';

import arrayToText from '../utils/arrayToText';

function MultiSelect({
  id,
  label,
  value,
  name,
  options,
  onChange,
  isErrorShown,
  errorText,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const className = {
    triangle: classNames(styles.triangle, {
      [styles.triangleOpen]: isOpen,
    }),
    options: classNames(styles.options, {
      [styles.optionsOpen]: isOpen,
    }),
  };

  const handleFieldClick = () => setIsOpen(!isOpen);

  const handleOptionClick = (clickedOption) => () => {
    const newValue = value.includes(clickedOption)
      ? value.filter((option) => option !== clickedOption)
      : value.concat(clickedOption).sort();
    onChange({ target: { value: newValue, name } });
  };

  return (
    <FormField>
      <Label htmlFor={id}>{label}</Label>
      <div className={styles.inputWrapper} onClick={handleFieldClick}>
        <input
          id={id}
          type="text"
          name={name}
          placeholder="Select genres..."
          value={arrayToText(value)}
          className={styles.input}
          disabled
        />
        <div className={className.triangle}>▼</div>
      </div>
      <div className={className.options}>
        {options.map((option, index) => {
          const spanId = id + index;
          return (
            <div className={styles.option} key={option}>
              <input
                type="checkbox"
                checked={value.includes(option)}
                onChange={handleOptionClick(option)}
                aria-labelledby={spanId}
              />
              <span id={spanId}>{option}</span>
            </div>
          );
        })}
      </div>
      {isErrorShown ? <FormError>{errorText}</FormError> : null}
    </FormField>
  );
}

MultiSelect.defaultProps = {
  value: '',
};

export default MultiSelect;
