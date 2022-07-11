import styles from './Molecule.MovieDetails.module.scss';

import React from 'react';

import Heading from './Atom.Heading';
import MoviePoster from './Atom.MoviePoster';
import Paragraph from './Atom.Paragraph';

import arrayToText from '../utils/arrayToText';
import formatRuntime from '../utils/formatRuntime';

function MovieDetails({
  movie: {
    posterPath,
    title,
    voteAverage,
    genres,
    releaseDate,
    runtime,
    overview,
  },
}) {
  return (
    <div className={styles.container}>
      <MoviePoster url={posterPath} />
      <div className={styles.info}>
        <div className={styles.title}>
          <Heading>{title.toUpperCase()}</Heading>
          <div className={styles.rating}>{voteAverage}</div>
        </div>
        <div className={styles.genres}>{arrayToText(genres)}</div>
        <div className={styles.yearAndDuration}>
          <span>{releaseDate.slice(0, 4)}</span>
          <span>{formatRuntime(runtime)}</span>
        </div>
        <Paragraph style="tertiary">{overview}</Paragraph>
      </div>
    </div>
  );
}

export default MovieDetails;
