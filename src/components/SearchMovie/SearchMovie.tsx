import React from 'react';
import {useDispatch} from "react-redux";
import {useParams} from 'react-router-dom';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchSearchMovie} from "../../redux/actions/movies";
import {Movie} from "../MovieInfo/Movie";
import './searchMovie.css';

export const SearchMovie: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector(({movies}) => movies.movies);
  const {query} = useParams<{ query: string }>();

  React.useEffect(() => {
    dispatch(fetchSearchMovie(query))
  }, [query])

  return (
    <div className="search">
      <div className="container">
        <div className="movies__content">
          {
            movies && movies.map(movie => (
              <Movie key={movie.id} {...movie}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};