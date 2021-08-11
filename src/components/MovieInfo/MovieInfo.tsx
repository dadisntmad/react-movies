import React from 'react';

import {useTypedSelector} from '../../hooks/useTypedSelector';

import {fetchMovieProfile} from '../../redux/actions/movies';

import {useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

import './movieInfo.css';

const IMAGES = 'https://image.tmdb.org/t/p/w300';
const BG_IMAGES = 'https://image.tmdb.org/t/p/original';

export const MovieInfo: React.FC = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const {id} = useParams<{ id: string }>();
  const movieProfile = useTypedSelector(({movies}) => movies.movieProfile);

  React.useEffect(() => {
    dispatch(fetchMovieProfile(Number(id)));
  }, []);

  const onGetBack = () => {
    history.push(`/`);
  }

  return (
    <div className="movie__info">
      {Object.keys(movieProfile).length > 0 && (
        <>
          <div className="movie__background">
            <img src={BG_IMAGES + movieProfile.poster_path} alt="background"/>
          </div>
          <div className="container">
             <span className="btn__info">
                <button className="btn__back" onClick={onGetBack}>Get Back</button>
              </span>
            <div className="movie__content">
              <div className="movie__pic">
                <img src={IMAGES + movieProfile.poster_path} alt="poster"/>
              </div>
              <div className="movie__description">
                <div className="movie__name">
                  {movieProfile.title} ({movieProfile.release_date?.slice(0, 4)})
                </div>
                <div className="movie__genre">
                  Genre(s):{' '}
                  {movieProfile.genres?.map((genre) => (
                    <span key={genre.id}>{genre.name} </span>
                  ))}
                </div>
                <div className="movie__rating">Rating: {movieProfile.vote_average}</div>
                <div className="movie__overview">{movieProfile.overview}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
