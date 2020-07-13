import { IState } from '../interfaces';
import { ACTION_TYPES } from '../../constants/action-types';
import { filterMoviesWithSelectedGenre } from './../../utils/common';

const defaultState: IState = {
  loading: false,
  genres: {},
  movies: [],
  currentPage: 0,
  selectedGenre: -1,
  genresArr: [],
};

const reducers = (state: IState = defaultState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING:
      return {
        ...state,
        loading: action.data,
      };

    case ACTION_TYPES.RECEIVE_GENRES:
      return {
        ...state,
        genres: action.data.genresObj,
        genresArr: action.data.genresArr,
      };

    case ACTION_TYPES.RECEIVE_MOVIES:
      return {
        ...state,
        movies: filterMoviesWithSelectedGenre(state.selectedGenre, [
          ...state.movies,
          ...action.data,
        ]),
      };

    case ACTION_TYPES.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.data,
      };

    case ACTION_TYPES.RESET_MOVIES:
      return {
        ...state,
        movies: [],
      };

    case ACTION_TYPES.SET_SELECTED_GENRE:
      return {
        ...state,
        selectedGenre: action.data,
        movies: filterMoviesWithSelectedGenre(
          state.selectedGenre,
          state.movies
        ),
      };

    default:
      return state;
  }
};

export default reducers;
