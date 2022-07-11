import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { MODALS_STATE } from '../constants/modals';
import { modalsActions } from '../store/modals';

import Button from './Atom.Button';
import Paragraph from './Atom.Paragraph';
import Modal from './Molecule.Modal';
import Api from '../api';

function ModalDeleteMovie() {
  const router = useRouter();
  const dispatch = useDispatch();
  const movieId = useSelector((state) => state.modals.movieToDeleteId);

  const isMovieDeleteOpen = useSelector(
    (state) => state.modals.modalState === MODALS_STATE.DELETE
  );

  const handleModalClose = () => {
    dispatch(modalsActions.closeMovieDelete());
  };

  const handleConfirmDelete = async () => {
    const response = await Api.deleteMovie(movieId);
    if (response.ok) {
      router.push('/search');
    }
    handleModalClose();
  };

  if (isMovieDeleteOpen)
    return (
      <Modal
        title="DELETE MOVIE"
        content={
          <Paragraph>Are you sure you want to delete this movie?</Paragraph>
        }
        footer={
          <>
            <Button style="secondary" onClick={handleModalClose}>
              CANCEL
            </Button>
            <Button style="primary" onClick={handleConfirmDelete}>
              CONFIRM
            </Button>
          </>
        }
        onClose={handleModalClose}
      />
    );

  return null;
}

export default ModalDeleteMovie;
