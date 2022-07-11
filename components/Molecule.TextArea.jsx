import styles from './Molecule.TextArea.module.scss';

import React from 'react';

import FormField from './Atom.FormField';
import Label from './Atom.Label';
import FormError from './Atom.FormError';

function TextArea({
  id,
  label,
  placeholder,
  name,
  value,
  onInput,
  onChange,
  isErrorShown,
  errorText,
}) {
  return (
    <FormField>
      <Label htmlFor={id}>{label}</Label>
      <textarea
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onInput={onInput}
        onChange={onChange}
        className={styles.textarea}
      />
      {isErrorShown ? <FormError>{errorText}</FormError> : null}
    </FormField>
  );
}

TextArea.defaultProps = {
  type: 'text',
  value: '',
};

export default TextArea;
