import { snakeToCamel } from '../utils/convertStringNaming';

export default function (movie) {
  const outputMovie = {};
  Object.keys(movie).forEach((key) => {
    outputMovie[snakeToCamel(key)] = movie[key];
  });
  return outputMovie;
}
