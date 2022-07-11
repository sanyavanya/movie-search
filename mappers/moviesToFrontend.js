import movieToFrontend from './movieToFrontend';

export default function (movies) {
  const byId = {};
  const allIds = [];
  movies.forEach((movie) => {
    byId[movie.id] = movieToFrontend(movie);
    allIds.push(movie.id);
  });
  return { byId, allIds };
}
