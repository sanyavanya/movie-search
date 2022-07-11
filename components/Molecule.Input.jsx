import styles from './Molecule.Input.module.scss';

import React from 'react';

import { KEY_ENTER } from '../constants/util';

import FormError from './Atom.FormError';
import FormField from './Atom.FormField';
import Label from './Atom.Label';

function Input({
  id,
  label,
  name,
  type,
  disabled,
  value,
  placeholder,
  min,
  max,
  step,
  onInput,
  onChange,
  onEnterPress,
  isErrorShown,
  errorText,
}) {
  const handleKeyDown = (e) => {
    if (e.key === KEY_ENTER) {
      onEnterPress();
    }
  };

  return (
    <FormField>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        type={type}
        name={name}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        className={styles.input}
        onInput={onInput}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      {isErrorShown ? <FormError>{errorText}</FormError> : null}
    </FormField>
  );
}

Input.defaultProps = {
  type: 'text',
  disabled: false,
  value: '',
  isErrorShown: false,
};

export default Input;
