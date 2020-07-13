import { createMovieComponent } from './HOC';
import { getMovies } from '../../redux/actions';
import { API_URLS } from '../../utils/api-urls';

export default createMovieComponent(getMovies.bind(null, API_URLS.topRated));
