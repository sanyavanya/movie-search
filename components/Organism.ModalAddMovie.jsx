import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import Api from '../api';
import { MODALS_STATE } from '../constants/modals';
import movieToBackend from '../mappers/movieToBackend';
import { modalsActions } from '../store/modals';

import Modal from './Molecule.Modal';
import MovieEditor from './Organism.MovieEditor';

function ModalAddMovie() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isMovieAddOpen = useSelector(
    (state) => state.modals.modalState === MODALS_STATE.ADD
  );

  const handleModalClose = () => {
    dispatch(modalsActions.closeMovieAdd());
  };

  const handleModalSubmit = async (movie) => {
    const response = await Api.createMovie(movieToBackend(movie));
    if (response.ok) {
      const { id } = await response.json();
      router.push('/movie/' + id);
    }
    handleModalClose();
  };

  if (isMovieAddOpen)
    return (
      <Modal
        title="ADD MOVIE"
        content={
          <MovieEditor
            onClose={handleModalClose}
            onSubmit={handleModalSubmit}
          />
        }
        onClose={handleModalClose}
      />
    );

  return null;
}

export default ModalAddMovie;
