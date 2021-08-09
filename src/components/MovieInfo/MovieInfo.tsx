import React from 'react';
import './movieInfo.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {useParams} from 'react-router-dom';
import {fetchMovieProfile} from "../../redux/actions/movies";

const IMAGES = 'https://image.tmdb.org/t/p/w300';
const BG_IMAGES = 'https://image.tmdb.org/t/p/original';

export const MovieInfo: React.FC = () => {
  const dispatch = useDispatch();
  const {id} = useParams<{ id: string }>();
  const movieProfile = useTypedSelector(({movies}) => movies.movieProfile);

  React.useEffect(() => {
    dispatch(fetchMovieProfile(Number(id)))
  }, [])

  return (
    <div className="movie__info">
      {
        Object.keys(movieProfile).length > 0 && (
          <>
            <div className="movie__background">
              <img src={BG_IMAGES + movieProfile.poster_path} alt=""/>
            </div>
            <div className="container">
              <div className="movie__content">
                <div className="movie__pic">
                  <img src={IMAGES + movieProfile.poster_path}
                       alt=""/>
                </div>
                <div className="movie__description">
                  <div className="movie__name">
                    {movieProfile.title} ({movieProfile.release_date!.slice(0, 4)})
                  </div>
                  <div className="movie__genre">
                    {
                      movieProfile.genres!.map(genre => (
                        <span key={genre.id}>
                          {genre.name}{' '}
                        </span>
                      ))
                    }
                  </div>
                  <div className="movie__rating">
                    {movieProfile.vote_average}
                  </div>
                  <div className="movie__overview">
                    {movieProfile.overview}
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};
