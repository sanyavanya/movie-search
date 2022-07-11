import styles from './Organism.Header.module.scss';

import React from 'react';
import Link from 'next/link';

import Logo from '../components/Atom.Logo';

function Header({ button, content }) {
  return (
    <header className={styles.container}>
      <div className={styles.top}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        {button}
      </div>
      {content}
    </header>
  );
}

export default Header;
