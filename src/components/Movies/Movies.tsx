import React from 'react';
import './movies.css';
import {useDispatch} from "react-redux";
import {fetchMovies} from "../../redux/actions/movies";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Movie} from "../MovieInfo/Movie";

export const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector(({movies}) => movies.movies);

  React.useEffect(() => {
    dispatch(fetchMovies());
  }, [])

  return (
    <div className="movies">
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

