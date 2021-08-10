import { MovieProfile, MoviesActionType, MoviesType } from '../../types/movies';
import { Dispatch } from 'redux';
import axios from 'axios';

export enum MoviesActionTypes {
  SET_MOVIES = 'MOVIES@SET_MOVIES',
  SET_ERROR = 'MOVIES@SET_ERROR',
  SET_PAGE = 'MOVIES@SET_PAGE',
  SET_TOTAL_PAGES = 'MOVIES@SET_TOTAL_PAGES',
  SET_IS_LOADING = 'MOVIES@SET_IS_LOADING',
  SET_QUERY = 'MOVIES@SET_QUERY',
  SET_CLEAR = 'MOVIES@SET_CLEAR',
  SET_MOVIE_PROFILE = 'MOVIES@SET_MOVIE_PROFILE',
}

const setMovies = (movies: MoviesType[]): MoviesActionType => ({
  type: MoviesActionTypes.SET_MOVIES,
  payload: movies,
});

const setError = (error: null | string): MoviesActionType => ({
  type: MoviesActionTypes.SET_ERROR,
  payload: error,
});

export const setPage = (page: number): MoviesActionType => ({
  type: MoviesActionTypes.SET_PAGE,
  payload: page,
});

const setTotalPages = (count: number): MoviesActionType => ({
  type: MoviesActionTypes.SET_TOTAL_PAGES,
  payload: count,
});

const setIsLoading = (): MoviesActionType => ({
  type: MoviesActionTypes.SET_IS_LOADING,
});

export const setQuery = (query: string): MoviesActionType => ({
  type: MoviesActionTypes.SET_QUERY,
  payload: query,
});

export const setClear = (): MoviesActionType => ({
  type: MoviesActionTypes.SET_CLEAR,
});

const setMovieProfile = (movie: MovieProfile): MoviesActionType => ({
  type: MoviesActionTypes.SET_MOVIE_PROFILE,
  payload: movie,
});

export const fetchMovies =
  (page: number = 1) =>
  async (dispatch: Dispatch<MoviesActionType>) => {
    try {
      dispatch(setIsLoading());
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=${process.env.REACT_APP_MOVIES_API_KEY}`,
      );
      dispatch(setMovies(response.data.results));
      dispatch(setTotalPages(response.data.total_pages));
    } catch (e) {
      dispatch(setError(e));
    }
  };

export const fetchSearchMovie =
  (query: string, page: number = 1) =>
  async (dispatch: Dispatch<MoviesActionType>) => {
    try {
      dispatch(setIsLoading());
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${process.env.REACT_APP_MOVIES_API_KEY}`,
      );
      dispatch(setMovies(response.data.results));
      dispatch(setTotalPages(response.data.total_pages));
    } catch (e) {
      dispatch(setError(e));
    }
  };

export const fetchMovieProfile =
  (movieId: number) => async (dispatch: Dispatch<MoviesActionType>) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`,
      );
      dispatch(setMovieProfile(response.data));
    } catch (e) {
      dispatch(setError(e));
    }
  };
