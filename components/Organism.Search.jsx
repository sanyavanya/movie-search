import styles from './Organism.Search.module.scss';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from './Atom.Button';
import Heading from './Atom.Heading';
import Input from './Molecule.Input';

function Search() {
  const router = useRouter();
  const [q, setQ] = useState('');

  useEffect(() => {
    setQ(router.query.q);
  }, [router.query.q]);

  const handleSearchInputChange = (e) => {
    setQ(e.target.value);
  };

  const handleSearch = () => {
    router.push({
      query: { q },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Heading>FIND YOUR MOVIE</Heading>
        <div className={styles.search__field}>
          <Input
            id="test"
            type="text"
            placeholder="What do you want to watch?"
            value={q}
            onChange={handleSearchInputChange}
            onEnterPress={handleSearch}
          />
          <Button style="primary" onClick={handleSearch}>
            SEARCH
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Search;
