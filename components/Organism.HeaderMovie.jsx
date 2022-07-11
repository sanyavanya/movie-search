import React from 'react';
import Link from 'next/link';

import Button from './Atom.Button';
import Error from './Atom.Error';
import MovieDetails from './Molecule.MovieDetails';
import Header from './Organism.Header';

function HeaderMovie({ error, movie }) {
  return (
    <Header
      button={
        <Link href="/search">
          <a>
            <Button type="button" style="special">
              BACK TO SEARCH
            </Button>
          </a>
        </Link>
      }
      content={
        error ? (
          <Error>{error.statusText}</Error>
        ) : (
          <MovieDetails movie={movie} />
        )
      }
    />
  );
}

export default HeaderMovie;
