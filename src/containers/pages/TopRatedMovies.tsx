import { createMovieComponent } from './HOC';
import { getMovies, setCurentPage, resetMovies } from '../../redux/actions';
import { API_URLS } from '../../utils/api-urls';

export default createMovieComponent(
  getMovies.bind(null, API_URLS.topRated),
  setCurentPage.bind(null, 0),
  resetMovies
);
