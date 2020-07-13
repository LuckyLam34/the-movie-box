import axios from 'axios';
import { API_URLS } from './api-urls';

function httpGetRequest(url: string): Promise<any> {
  return axios.get(url);
}

export function fetchMovies(url: string) {
  return httpGetRequest(url);
}

export function fetchMovieGenres() {
  const url = API_URLS.movieGenres.replace('$pageNum', '1');

  return httpGetRequest(url);
}
