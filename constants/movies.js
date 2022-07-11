export const MOVIES_STATE = {
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
};
export const MOVIES_PER_PAGE = 12;

export const GENRES = [
  'action',
  'adventure',
  'animation',
  'comedy',
  'crime',
  'documentary',
  'drama',
  'family',
  'fantasy',
  'history',
  'horror',
  'music',
  'mystery',
  'romance',
  'science fiction',
  'tv movie',
  'thriller',
  'war',
  'western',
];

export const GENRES_ALL = 'all';

export const SORTS = {
  voteAverage: 'RATING',
  releaseDate: 'RELEASE DATE',
  title: 'TITLE',
};

export const DIRECTION = {
  asc: 'asc',
  desc: 'desc',
};

export const SEARCH_BY = {
  title: 'title',
  genres: 'genres',
};

export const URL_REGEX =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

export const PAGE_NUMBER_FIRST = 1;
