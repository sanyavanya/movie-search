import urlParamsToString from '../utils/urlParamsToString';
import { METHOD, BASE_PATH, HEADERS } from '../constants/api';

const Api = {
  getMovies(parameters) {
    const queryString = urlParamsToString(parameters);
    return fetch(BASE_PATH + 'movies' + queryString, { method: METHOD.GET });
  },
  createMovie(movie) {
    return fetch(BASE_PATH + 'movies', {
      headers: HEADERS,
      method: METHOD.POST,
      body: JSON.stringify(movie),
    });
  },
  deleteMovie(movieId) {
    return fetch(BASE_PATH + 'movies/' + movieId, { method: METHOD.DELETE });
  },
  updateMovie(movie) {
    return fetch(BASE_PATH + 'movies', {
      headers: HEADERS,
      method: METHOD.PUT,
      body: JSON.stringify(movie),
    });
  },
  getMovieDetails(movieId) {
    return fetch(BASE_PATH + 'movies/' + movieId, {
      headers: HEADERS,
      method: METHOD.GET,
    });
  },
};

export default Api;
