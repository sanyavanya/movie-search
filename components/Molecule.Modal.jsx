import styles from './Molecule.Modal.module.scss';

import React from 'react';

import { BUTTON_CLOSE } from '../constants/ui';

import Button from './Atom.Button';
import Heading from './Atom.Heading';

function Modal({ title, content, footer, onClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.closeButton}>
          <Button style="icon" onClick={onClose}>
            {BUTTON_CLOSE}
          </Button>
        </div>
        <div className={styles.heading}>
          <Heading>{title}</Heading>
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  );
}

export default Modal;
