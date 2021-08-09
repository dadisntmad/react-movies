import { MovieProfile, MoviesActionType, MoviesActionTypes, MoviesType } from '../../types/movies';
import { Dispatch } from 'redux';
import axios from 'axios';

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
      dispatch(setPage(page));
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
      dispatch(setPage(page));
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
