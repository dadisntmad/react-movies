import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchSearchMovie } from '../../redux/actions/movies';

import { Movie } from '../MovieInfo/Movie';
import { Loader } from '../Common/Loader/Loader';
import { Paginator } from '../Common/Pagination/Pagination';

import './searchMovie.css';

export const SearchMovie: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector(({ movies }) => movies.movies);
  const { query } = useParams<{ query: string }>();
  const page = useTypedSelector(({ movies }) => movies.page);
  const totalPages = useTypedSelector(({ movies }) => movies.totalPages);
  const isLoading = useTypedSelector(({ movies }) => movies.isLoading);

  React.useEffect(() => {
    dispatch(fetchSearchMovie(query, page));
  }, [dispatch, query, page]);

  return (
    <div className="search">
      <div className="container">
        <div className={totalPages > 1 ? 'movies__content' : 'movies__content__less'}>
          {isLoading
            ? Array(20)
                .fill(0)
                .map((_, index) => <Loader key={index} />)
            : movies && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
        <Paginator page={page} />
      </div>
    </div>
  );
};
