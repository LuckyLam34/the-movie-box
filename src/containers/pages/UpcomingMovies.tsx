import { getMovies } from '../../redux/actions';
import { API_URLS } from '../../utils/api-urls';
import { createMovieComponent } from './HOC';

export default createMovieComponent(getMovies.bind(null, API_URLS.upcoming));
