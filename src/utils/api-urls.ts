import { environment } from '../environment';

const params = `?api_key=${environment.APIKey}&language=en-US&page=$pageNum`;

export const API_URLS = {
  popularMovies: environment.baseAPI + '/movie/popular' + params,
  movieGenres: environment.baseAPI + '/genre/movie/list' + params,
  topRated: environment.baseAPI + '/movie/top_rated' + params,
  upcoming: environment.baseAPI + '/movie/upcoming' + params,
};
