import styles from './Organism.SearchResults.module.scss';

import React from 'react';
import { useRouter } from 'next/router';

import Error from './Atom.Error';
import Spinner from './Atom.Spinner';
import MoviesFilter from './Molecule.MoviesFilter';
import MoviesSort from './Molecule.MoviesSort';
import Pagination from './Molecule.Pagination';
import MoviesGrid from './Organism.MoviesGrid';

import {
  DIRECTION,
  GENRES,
  GENRES_ALL,
  MOVIES_PER_PAGE,
  MOVIES_STATE,
  PAGE_NUMBER_FIRST,
  SORTS,
} from '../constants/movies';

const genresOptions = [GENRES_ALL].concat(GENRES);

function SearchResults({ moviesState, error, movies, count }) {
  const router = useRouter();
  const totalPagesAmount = Math.ceil(count / MOVIES_PER_PAGE);
  const resultsCount = `${count} movie${count !== 1 ? 's' : ''} found`;

  const handleSelectGenre = (genre) => {
    router.push({
      query: {
        ...router.query,
        genre: genre === GENRES_ALL ? '' : genre,
        page: PAGE_NUMBER_FIRST,
      },
    });
  };

  const handleSelectSortBy = (sortBy) => {
    router.push({
      query: {
        ...router.query,
        sortBy,
        page: PAGE_NUMBER_FIRST,
      },
    });
  };

  const handleToggleSortOrder = () => {
    router.push({
      query: {
        ...router.query,
        sortOrder:
          router.query.sortOrder === DIRECTION.asc
            ? DIRECTION.desc
            : DIRECTION.asc,
        page: PAGE_NUMBER_FIRST,
      },
    });
  };

  const handlePageChange = (page) => {
    router.push({
      query: {
        ...router.query,
        page,
      },
    });
  };

  const results = (
    <>
      <div className={styles.count}>{resultsCount}</div>
      <MoviesGrid movies={movies} />
      {totalPagesAmount > 1 && (
        <Pagination
          currentPage={Number(router.query.page) || PAGE_NUMBER_FIRST}
          totalPages={totalPagesAmount}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );

  return (
    <section className={styles.container}>
      <div className={styles.filterSort}>
        <MoviesFilter
          genres={genresOptions}
          selectedGenre={router.query.genre || GENRES_ALL}
          onSelectGenre={handleSelectGenre}
        />
        <MoviesSort
          sorts={SORTS}
          selectedSort={router.query.sortBy || Object.keys(SORTS)[0]}
          sortOrder={router.query.sortOrder || DIRECTION.desc}
          onSelectSort={handleSelectSortBy}
          onToggleSortOrder={handleToggleSortOrder}
        />
      </div>
      <div className={styles.data}>
        {moviesState === MOVIES_STATE.LOADING && <Spinner />}
        {moviesState === MOVIES_STATE.LOADED && results}
        {moviesState === MOVIES_STATE.ERROR && (
          <Error>{error.statusText}</Error>
        )}
      </div>
    </section>
  );
}

SearchResults.defaultProps = {
  moviesState: MOVIES_STATE.LOADING,
  error: null,
  movies: null,
  count: 0,
  page: 0,
};

export default SearchResults;
