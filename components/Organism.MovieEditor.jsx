import styles from './Organism.MovieEditor.module.scss';

import React from 'react';
import { useFormik } from 'formik';

import Button from './Atom.Button';
import Input from './Molecule.Input';
import MultiSelect from './Molecule.MultiSelect';
import TextArea from './Molecule.TextArea';

import { GENRES } from '../constants/movies';
import { BUTTON_CANCEL, BUTTON_SUBMIT } from '../constants/ui';
import movieEditorValidationSchema from '../utils/movieEditorValidationSchema';

function MovieEditor({ initialMovieData, onClose, onSubmit }) {
  const {
    title,
    releaseDate,
    posterPath,
    voteAverage,
    genres,
    runtime,
    overview,
  } = initialMovieData;

  const formik = useFormik({
    initialValues: {
      title,
      releaseDate,
      posterPath,
      voteAverage,
      genres,
      runtime,
      overview,
    },
    validationSchema: movieEditorValidationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.form}>
        <Input
          label="title"
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          isErrorShown={!!(formik.touched.title && formik.errors.title)}
          errorText={formik.errors.title}
        />
        <Input
          label="release date"
          type="date"
          name="releaseDate"
          value={formik.values.releaseDate}
          onChange={formik.handleChange}
          isErrorShown={
            !!(formik.touched.releaseDate && formik.errors.releaseDate)
          }
          errorText={formik.errors.releaseDate}
        />
        <Input
          label="poster url"
          type="text"
          name="posterPath"
          value={formik.values.posterPath}
          onChange={formik.handleChange}
          isErrorShown={
            !!(formik.touched.posterPath && formik.errors.posterPath)
          }
          errorText="must be a correct url"
        />
        <Input
          label="rating"
          type="number"
          step=".1"
          name="voteAverage"
          value={formik.values.voteAverage}
          onChange={formik.handleChange}
          isErrorShown={
            !!(formik.touched.voteAverage && formik.errors.voteAverage)
          }
          errorText={formik.errors.voteAverage}
        />
        <MultiSelect
          id="multi-select-movie-editor"
          label="genres"
          options={GENRES}
          multiple
          name="genres"
          value={formik.values.genres}
          onChange={formik.handleChange}
          isErrorShown={!!(formik.touched.genres && formik.errors.genres)}
          errorText={formik.errors.genres}
        />
        <Input
          label="duration (minutes)"
          type="number"
          step="1"
          name="runtime"
          value={formik.values.runtime}
          onChange={formik.handleChange}
          isErrorShown={!!(formik.touched.runtime && formik.errors.runtime)}
          errorText={formik.errors.runtime}
        />
        <div className={styles.wideField}>
          <TextArea
            id="text-area-movie-editor"
            label="description"
            name="overview"
            value={formik.values.overview}
            onChange={formik.handleChange}
            isErrorShown={!!(formik.touched.overview && formik.errors.overview)}
            errorText={formik.errors.overview}
          />
        </div>
      </div>
      <div className={styles.actions}>
        <Button style="secondary" type="button" onClick={onClose}>
          {BUTTON_CANCEL}
        </Button>
        <Button style="primary" type="submit">
          {BUTTON_SUBMIT}
        </Button>
      </div>
    </form>
  );
}

MovieEditor.defaultProps = {
  initialMovieData: {
    runtime: 1,
    overview: '',
    genres: [],
    voteAverage: 5,
    releaseDate: '',
    title: '',
    posterPath: '',
  },
};

export default MovieEditor;
