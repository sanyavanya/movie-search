import React from 'react';
import { useDispatch } from 'react-redux';

import { modalsActions } from '../store/modals';

import Button from './Atom.Button';
import Header from './Organism.Header';
import Search from './Organism.Search';

function HeaderSearch() {
  const dispatch = useDispatch();

  const handleOpenMovieAdd = () => {
    dispatch(modalsActions.openMovieAdd());
  };

  return (
    <Header
      button={
        <Button type="button" style="special" onClick={handleOpenMovieAdd}>
          + ADD MOVIE
        </Button>
      }
      content={<Search />}
    />
  );
}

export default HeaderSearch;
