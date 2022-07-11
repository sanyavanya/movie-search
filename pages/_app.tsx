import '../styles/globals.scss';

import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import store from '../store';

import ErrorBoundary from '../components/Atom.ErrorBoundary';
const ModalAddMovie = React.lazy(
  () => import('../components/Organism.ModalAddMovie')
);
const ModalEditMovie = React.lazy(
  () => import('../components/Organism.ModalEditMovie')
);
const ModalDeleteMovie = React.lazy(
  () => import('../components/Organism.ModalDeleteMovie')
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <React.Suspense>
        <ErrorBoundary>
          <ModalAddMovie />
          <ModalEditMovie />
          <ModalDeleteMovie />
        </ErrorBoundary>
      </React.Suspense>
    </Provider>
  );
}

export default MyApp;
