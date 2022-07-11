import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import Api from '../api';
import { MODALS_STATE } from '../constants/modals';
import movieToBackend from '../mappers/movieToBackend';
import { modalsActions } from '../store/modals';

import Modal from './Molecule.Modal';
import MovieEditor from './Organism.MovieEditor';

function ModalEditMovie() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isMovieEditOpen = useSelector(
    (state) => state.modals.modalState === MODALS_STATE.EDIT
  );
  const movieToEdit = useSelector((state) => state.modals.movieToEdit);

  const handleModalClose = () => {
    dispatch(modalsActions.closeMovieEdit());
  };

  const handleModalSubmit = async (movie) => {
    const response = await Api.updateMovie(
      movieToBackend({ ...movie, id: movieToEdit.id })
    );
    if (response.ok) {
      const { id } = await response.json();
      router.push('/movie/' + id);
    }
    handleModalClose();
  };

  if (isMovieEditOpen)
    return (
      <Modal
        title="EDIT MOVIE"
        content={
          <MovieEditor
            initialMovieData={movieToEdit}
            onClose={handleModalClose}
            onSubmit={handleModalSubmit}
          />
        }
        onClose={handleModalClose}
      />
    );

  return null;
}

export default ModalEditMovie;
