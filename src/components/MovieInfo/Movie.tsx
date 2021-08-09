import React from 'react';
import {useHistory} from 'react-router-dom';

type MovieProps = {
  id: number,
  poster_path: string,
  title: string,
}

const IMAGES = 'https://image.tmdb.org/t/p/w300';

export const Movie: React.FC<MovieProps> = ({id, poster_path, title}) => {
  let history = useHistory();

  const onMovieOverview = (movieId: number) => {
    history.push(`/movie/${movieId}`)
  }

  return (
    <div className="movie" onClick={() => onMovieOverview(id)}>
      <img src={IMAGES + poster_path} alt={title}/>
      <p>{title}</p>
    </div>
  );
};
