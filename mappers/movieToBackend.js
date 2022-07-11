import { camelToSnake } from '../utils/convertStringNaming';

export default function (movie) {
  const outputMovie = {};
  Object.keys(movie).forEach((key) => {
    outputMovie[camelToSnake(key)] = movie[key];
  });
  return outputMovie;
}
