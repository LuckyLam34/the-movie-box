import { ACTION_NAMES } from '../../constants/action-names';
import { fetchMovies, fetchMovieGenres } from '../../utils/http-request';
import { convertArrToObj, mergeMovieGenre } from '../../utils/common';

export const getMovies = (url: string) => {
  return (dispatch: any, getState: any) => {
    dispatch(loading(true));

    const { genres } = getState();

    fetchMovies(url)
      .then((res) => {
        const movies = mergeMovieGenre(res.data.results, genres);

        dispatch(receiveMovies(movies));
      })
      .finally(() => dispatch(loading(false)));
  };
};

export const getMovieGenres = () => {
  return (dispatch: any, getState: any) => {
    return new Promise(async (resolve) => {
      const { genres } = getState();

      if (Object.keys(genres).length > 0) {
        resolve();
        return;
      }

      dispatch(loading(true));
      const res = await fetchMovieGenres();
      const genreObj = convertArrToObj(res.data.genres);
      dispatch(loading(false));
      dispatch(receiveGenres(genreObj));
      resolve();
    });
  };
};

export const loading = (val: boolean) => ({
  type: ACTION_NAMES.LOADING,
  data: val,
});

export const receiveGenres = (data: any) => ({
  type: ACTION_NAMES.RECEIVE_GENRES,
  data,
});

export const receiveMovies = (data: any) => ({
  type: ACTION_NAMES.RECEIVE_MOVIES,
  data,
});
