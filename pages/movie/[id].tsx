import type { NextPage } from 'next';

import Layout from '../../components/Atom.Layout';
import HeaderMovie from '../../components/Organism.HeaderMovie';
import Api from '../../api';

import movieToFrontend from '../../mappers/movieToFrontend';
import ErrorBoundary from '../../components/Atom.ErrorBoundary';

export async function getServerSideProps({ params: { id } }: any) {
  const response = await Api.getMovieDetails(id);
  if (response.ok) {
    const res = await response.json();
    return {
      props: {
        error: null,
        movie: movieToFrontend(res),
      },
    };
  } else {
    return {
      props: {
        error: {
          status: response.status,
          statusText: response.statusText,
        },
        movie: null,
      },
    };
  }
}

const Movie: NextPage = ({ error, movie }: any) => {
  return (
    <Layout>
      <ErrorBoundary>
        <HeaderMovie error={error} movie={movie} />
      </ErrorBoundary>
    </Layout>
  );
};

export default Movie;
