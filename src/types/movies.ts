export type MoviesState = {
  movies: MoviesType[],
  error: null | string,
  page: number,
  isLoading: boolean,
  query: string,
  movieProfile: MovieProfile,
}

export type MovieProfile = {
  id?: number,
  genres?: Genres[],
  overview?: string,
  poster_path?: string,
  release_date?: string,
  title?: string,
  vote_average?: number
}

type Genres = {
  id: number,
  name: string
}

export type MoviesType = {
  id: number,
  poster_path: string,
  title: string,
}

export enum MoviesActionTypes {
  SET_MOVIES = 'MOVIES@SET_MOVIES',
  SET_ERROR = 'MOVIES@SET_ERROR',
  SET_PAGE = 'MOVIES@SET_PAGE',
  SET_IS_LOADING = 'MOVIES@SET_IS_LOADING',
  SET_QUERY = 'MOVIES@SET_QUERY',
  SET_CLEAR = 'MOVIES@SET_CLEAR',
  SET_MOVIE_PROFILE = 'MOVIES@SET_MOVIE_PROFILE',
}

type setMovies = {
  type: MoviesActionTypes.SET_MOVIES,
  payload: MoviesType[]
}

type setError = {
  type: MoviesActionTypes.SET_ERROR,
  payload: null | string
}

type setPage = {
  type: MoviesActionTypes.SET_PAGE,
  payload: number,
}

type setIsLoading = {
  type: MoviesActionTypes.SET_IS_LOADING
}

type setQuery = {
  type: MoviesActionTypes.SET_QUERY,
  payload: string
}

type setClear = {
  type: MoviesActionTypes.SET_CLEAR
}

type setMovieProfile = {
  type: MoviesActionTypes.SET_MOVIE_PROFILE,
  payload: MovieProfile
}

export type MoviesActionType =
  setMovies
  | setError
  | setPage
  | setIsLoading
  | setQuery
  | setClear
  | setMovieProfile;