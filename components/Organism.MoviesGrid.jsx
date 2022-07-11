import styles from './Organism.MoviesGrid.module.scss';

import React from 'react';

import MovieCard from './Organism.MovieCard';

function MoviesGrid({ movies }) {
  return (
    <div className={styles.container}>
      {movies.allIds.map((movieId) => (
        <MovieCard movie={movies.byId[movieId]} key={movieId} />
      ))}
    </div>
  );
}

export default MoviesGrid;
