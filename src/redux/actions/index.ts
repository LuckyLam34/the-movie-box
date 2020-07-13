import { ACTION_TYPES } from '../../constants/action-types';
import { fetchMovies, fetchMovieGenres } from '../../utils/http-requests';
import { convertArrToObj, mergeMovieGenre } from '../../utils/common';

export const getMovies = (url: string) => {
  return (dispatch: any, getState: any) => {
    dispatch(loading(true));

    const { genres, currentPage } = getState();
    url = url.replace('$pageNum', currentPage + 1);
    dispatch(setCurentPage(currentPage + 1));

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
      const genresObj = convertArrToObj(res.data.genres);

      dispatch(loading(false));
      dispatch(receiveGenres({ genresObj, genresArr: res.data.genres }));

      resolve();
    });
  };
};

export const loading = (val: boolean) => ({
  type: ACTION_TYPES.LOADING,
  data: val,
});

export const receiveGenres = (data: any) => ({
  type: ACTION_TYPES.RECEIVE_GENRES,
  data,
});

export const receiveMovies = (data: any) => ({
  type: ACTION_TYPES.RECEIVE_MOVIES,
  data,
});

export const setCurentPage = (data: number) => ({
  type: ACTION_TYPES.SET_CURRENT_PAGE,
  data,
});

export const resetMovies = () => ({
  type: ACTION_TYPES.RESET_MOVIES,
});

export const setSelectedGenre = (id: number) => ({
  type: ACTION_TYPES.SET_SELECTED_GENRE,
  data: id,
});
