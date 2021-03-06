import { getMovies, setCurentPage, resetMovies } from '../../redux/actions';
import { API_URLS } from '../../utils/api-urls';
import { createMovieComponent } from './HOC';

export default createMovieComponent(
  getMovies.bind(null, API_URLS.upcoming),
  setCurentPage.bind(null, 0),
  resetMovies
);
