import React from 'react';
import './movieInfo.css';

export const MovieInfo = () => {
  return (
    <div className="movie__info">
      <div className="movie__background">
        <img src="https://images4.alphacoders.com/114/1148849.jpg" alt=""/>
      </div>
      <div className="container">
        <div className="movie__content">
          <div className="movie__pic">
            <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hUfyYGP9Xf6cHF9y44JXJV3NxZM.jpg" alt=""/>
          </div>
          <div className="movie__description">
            <div className="movie__name">
              Cruella (2021)
            </div>
            <div className="movie__genre">Genre</div>
            <div className="movie__rating">
              7.9
            </div>
            <div className="movie__overview">
              Лондон 70-х годов охвачен зарождающейся культурой панк-рока. Невероятно одаренная мошенница по имени
              Эстелла
              решает сделать себе имя в мире моды. Её лучшие друзья — парочка юных карманников, которые ценят страсть
              Эстеллы к приключениям и надеются вместе с ней отвоевать себе место под солнцем на улицах британской
              столицы. В один прекрасный день модное чутье Эстеллы привлекает внимание шикарной и пугающе высокомерной
              баронессы фон Хельман.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
