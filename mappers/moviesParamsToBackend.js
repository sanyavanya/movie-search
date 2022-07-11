import {
  DIRECTION,
  MOVIES_PER_PAGE,
  PAGE_NUMBER_FIRST,
  SEARCH_BY,
  SORTS,
} from '../constants/movies';
import { camelToSnake } from '../utils/convertStringNaming';

export default function (params) {
  return {
    search: params.q || '',
    searchBy: SEARCH_BY.title,
    filter: params.genre || '',
    sortBy: params.sortBy
      ? camelToSnake(params.sortBy)
      : camelToSnake(Object.keys(SORTS)[0]),
    sortOrder: params.sortOrder || DIRECTION.desc,
    page: params.page ? parseInt(params.page) : PAGE_NUMBER_FIRST,
    limit: MOVIES_PER_PAGE,
    offset: params.page ? (params.page - 1) * MOVIES_PER_PAGE : 0,
  };
}
