import { IState } from '../interfaces';
import { ACTION_NAMES } from '../../constants/action-names';

const defaultState: IState = {
  loading: false,
  genres: {},
  movies: [],
  currentPage: 0,
};

const reducers = (state: IState = defaultState, action: any) => {
  switch (action.type) {
    case ACTION_NAMES.LOADING:
      return {
        ...state,
        loading: action.data,
      };

    case ACTION_NAMES.RECEIVE_GENRES:
      return {
        ...state,
        genres: action.data,
      };

    case ACTION_NAMES.RECEIVE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.data],
      };

    case ACTION_NAMES.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.data,
      };

    default:
      return state;
  }
};

export default reducers;
