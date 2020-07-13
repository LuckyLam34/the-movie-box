import { createMovieComponent } from './HOC';
import { getMovies, setCurentPage } from '../../redux/actions';
import { API_URLS } from '../../utils/api-urls';
import { resetMovies } from './../../redux/actions/index';

export default createMovieComponent(
  getMovies.bind(null, API_URLS.popularMovies),
  setCurentPage.bind(null, 0),
  resetMovies
);
