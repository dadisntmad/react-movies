import {MoviesActionType, MoviesActionTypes, MoviesState} from "../../types/movies";

const initialState: MoviesState = {
  movies: [],
  error: null,
  page: 1,
  isLoading: false,
  query: '',
}

const movies = (state = initialState, action: MoviesActionType): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.SET_MOVIES:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case MoviesActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case MoviesActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case MoviesActionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case MoviesActionTypes.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case MoviesActionTypes.SET_CLEAR:
      return {
        ...state,
        query: '',
      };
    default:
      return state;
  }
}

export default movies;