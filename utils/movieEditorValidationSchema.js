import * as Yup from 'yup';
import { URL_REGEX } from '../constants/movies';

export default Yup.object({
  title: Yup.string()
    .min(2, 'must be at least 2 symbols long')
    .max(120, 'must be less than 120 symbols long')
    .required('required'),
  releaseDate: Yup.string().required('required'),
  posterPath: Yup.string().matches(URL_REGEX).required('required'),
  voteAverage: Yup.number()
    .min(1, 'must be at least 1')
    .max(10, 'must be at most 10')
    .required('required'),
  genres: Yup.array().of(Yup.string()).min(1, 'required'),
  runtime: Yup.number().min(1, 'must be at least 1').required('required'),
  overview: Yup.string()
    .min(2, 'must be at least 2 symbols long')
    .max(500, 'must be less than 500 symbols long')
    .required('required'),
});
