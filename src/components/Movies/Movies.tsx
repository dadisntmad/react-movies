import React from 'react';

import {useTypedSelector} from '../../hooks/useTypedSelector';

import {useDispatch} from 'react-redux';

import {fetchMovies} from '../../redux/actions/movies';

import {Movie} from '../MovieInfo/Movie';
import {Loader} from '../Common/Loader/Loader';
import {Paginator} from '../Common/Pagination/Pagination';

import './movies.css';

export const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector(({movies}) => movies.movies);
  const page = useTypedSelector(({movies}) => movies.page);
  const isLoading = useTypedSelector(({movies}) => movies.isLoading);

  React.useEffect(() => {
    dispatch(fetchMovies(page));
  }, [page]);

  return (
    <div className="movies">
      <div className="container">
        <div className="movies__content">
          {isLoading
            ? Array(20)
              .fill(0)
              .map((_, index) => <Loader key={index}/>)
            : movies && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
        <Paginator page={page}/>
      </div>
    </div>
  );
};
