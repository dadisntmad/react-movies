import React from 'react';

type MovieProps = {
  poster_path: string,
  title: string
}

const IMAGES = 'https://image.tmdb.org/t/p/w300';

export const Movie: React.FC<MovieProps> = ({poster_path, title}) => {
  return (
    <div className="movie">
      <img src={IMAGES + poster_path} alt={title}/>
      <p>{title}</p>
    </div>
  );
};
