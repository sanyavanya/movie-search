import styles from './Organism.MovieCard.module.scss';

import React, { useState } from 'react';
import Link from 'next/link';

import arrayToText from '../utils/arrayToText';

import MoviePoster from './Atom.MoviePoster';
import MovieOptions from './Molecule.MovieOptions';
import { modalsActions } from '../store/modals';
import { useDispatch } from 'react-redux';

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleMouseLeave = () => setIsOptionsOpen(false);

  const handleMovieEdit = (e) => {
    e.stopPropagation();
    setIsOptionsOpen(false);
    dispatch(modalsActions.openMovieEdit(movie));
  };

  const handleMovieDelete = (e) => {
    e.stopPropagation();
    setIsOptionsOpen(false);
    dispatch(modalsActions.openMovieDelete(movie.id));
  };

  return (
    <div className={styles.container} onMouseLeave={handleMouseLeave}>
      <Link href={'/movie/' + movie.id}>
        <a>
          <MoviePoster url={movie.posterPath} />
        </a>
      </Link>
      <div className={styles.topLine}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.year}>
          {movie.releaseDate ? movie.releaseDate.slice(0, 4) : ''}
        </div>
      </div>
      <div className={styles.genres}>{arrayToText(movie.genres)}</div>
      <div className={styles.options}>
        <MovieOptions
          isOpen={isOptionsOpen}
          setIsOpen={setIsOptionsOpen}
          onMovieEdit={handleMovieEdit}
          onMovieDelete={handleMovieDelete}
        />
      </div>
    </div>
  );
}

export default MovieCard;
