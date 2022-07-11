import { configureStore } from '@reduxjs/toolkit';

import modalsReducer from './modals';

const store = configureStore({
  reducer: {
    modals: modalsReducer,
  },
});

export default store;
