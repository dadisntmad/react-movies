import {MoviesActionType, MoviesActionTypes, MoviesType} from "../../types/movies";
import {Dispatch} from "redux";
import axios from "axios";

const setMovies = (movies: MoviesType[]): MoviesActionType => ({
  type: MoviesActionTypes.SET_MOVIES,
  payload: movies,
})

const setError = (error: null | string): MoviesActionType => ({
  type: MoviesActionTypes.SET_ERROR,
  payload: error,
})

const setPage = (page: number): MoviesActionType => ({
  type: MoviesActionTypes.SET_PAGE,
  payload: page,
})

const setIsLoading = (): MoviesActionType => ({
  type: MoviesActionTypes.SET_IS_LOADING,
})

export const setQuery = (query: string): MoviesActionType => ({
  type: MoviesActionTypes.SET_QUERY,
  payload: query
})

export const setClear = (): MoviesActionType => ({
  type: MoviesActionTypes.SET_CLEAR,
})

export const fetchMovies = () => async (dispatch: Dispatch<MoviesActionType>) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`);
    dispatch(setMovies(response.data.results))
  } catch (e) {
    dispatch(setError(e));
  }
}

export const fetchSearchMovie = (query: string) => async (dispatch: Dispatch<MoviesActionType>) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_MOVIES_API_KEY}`);
    dispatch(setMovies(response.data.results));
  } catch (e) {
    dispatch(setError(e));
  }
}