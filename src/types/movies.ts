export type MoviesState = {
  movies: MoviesType[],
  error: null | string,
  page: number,
  isLoading: boolean,
  query: string,
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

export type MoviesActionType = setMovies | setError | setPage | setIsLoading | setQuery | setClear;