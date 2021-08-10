import {MoviesActionTypes} from "../redux/actions/movies";

export type MoviesState = {
  movies: MoviesType[];
  error: null | string;
  page: number;
  totalPages: number;
  isLoading: boolean;
  query: string;
  movieProfile: MovieProfile;
};

export type MovieProfile = {
  id?: number;
  genres?: Genres[];
  overview?: string;
  poster_path?: string;
  release_date?: string;
  title?: string;
  vote_average?: number;
};

type Genres = {
  id: number;
  name: string;
};

export type MoviesType = {
  id: number;
  poster_path: string;
  title: string;
};

type setMovies = {
  type: MoviesActionTypes.SET_MOVIES;
  payload: MoviesType[];
};

type setError = {
  type: MoviesActionTypes.SET_ERROR;
  payload: null | string;
};

type setPage = {
  type: MoviesActionTypes.SET_PAGE;
  payload: number;
};

type setTotalPages = {
  type: MoviesActionTypes.SET_TOTAL_PAGES;
  payload: number;
};

type setIsLoading = {
  type: MoviesActionTypes.SET_IS_LOADING;
};

type setQuery = {
  type: MoviesActionTypes.SET_QUERY;
  payload: string;
};

type setClear = {
  type: MoviesActionTypes.SET_CLEAR;
};

type setMovieProfile = {
  type: MoviesActionTypes.SET_MOVIE_PROFILE;
  payload: MovieProfile;
};

export type MoviesActionType =
  | setMovies
  | setError
  | setPage
  | setTotalPages
  | setIsLoading
  | setQuery
  | setClear
  | setMovieProfile;
