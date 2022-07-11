import styles from './Atom.MoviePoster.module.scss';

import React from 'react';

function MoviePoster({ url }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}

export default MoviePoster;
