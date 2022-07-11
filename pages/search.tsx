import type { NextPage } from 'next';
import Api from '../api/index';

import Layout from '../components/Atom.Layout';
import HeaderSearch from '../components/Organism.HeaderSearch';
import SearchResults from '../components/Organism.SearchResults';
import moviesToFrontend from '../mappers/moviesToFrontend';
import moviesParamsToBackend from '../mappers/moviesParamsToBackend';
import { MOVIES_STATE } from '../constants/movies';
import ErrorBoundary from '../components/Atom.ErrorBoundary';

export async function getServerSideProps({ query }: any) {
  const response = await Api.getMovies(moviesParamsToBackend(query));
  if (response.ok) {
    const res = await response.json();
    return {
      props: {
        moviesState: MOVIES_STATE.LOADED,
        error: null,
        movies: moviesToFrontend(res.data),
        count: res.totalAmount,
      },
    };
  } else {
    return {
      props: {
        moviesState: MOVIES_STATE.ERROR,
        error: {
          status: response.status,
          statusText: response.statusText,
        },
        movies: null,
        count: 0,
        page: 1,
      },
    };
  }
}

const Search: NextPage = ({ moviesState, movies, count, error }: any) => {
  return (
    <Layout>
      <ErrorBoundary>
        <HeaderSearch />
      </ErrorBoundary>
      <ErrorBoundary>
        <SearchResults
          moviesState={moviesState}
          movies={movies}
          count={count}
          error={error}
        />
      </ErrorBoundary>
    </Layout>
  );
};

export default Search;
