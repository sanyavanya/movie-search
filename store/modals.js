import { createSlice } from '@reduxjs/toolkit';

import { MODALS_STATE } from '../constants/modals';

const modalsInitialState = {
  modalState: MODALS_STATE.CLOSED,
  movieToEdit: null,
  movieToDeleteId: null,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState: modalsInitialState,
  reducers: {
    openMovieAdd: (state) => {
      state.modalState = MODALS_STATE.ADD;
    },
    closeMovieAdd: (state) => {
      state.modalState = MODALS_STATE.CLOSED;
    },
    openMovieEdit: (state, action) => {
      state.movieToEdit = action.payload;
      state.modalState = MODALS_STATE.EDIT;
    },
    closeMovieEdit: (state) => {
      state.movieToEdit = null;
      state.modalState = MODALS_STATE.CLOSED;
    },
    openMovieDelete: (state, action) => {
      state.movieToDeleteId = action.payload;
      state.modalState = MODALS_STATE.DELETE;
    },
    closeMovieDelete: (state) => {
      state.movieToDeleteId = null;
      state.modalState = MODALS_STATE.CLOSED;
    },
  },
});

export const modalsActions = modalsSlice.actions;
export default modalsSlice.reducer;
