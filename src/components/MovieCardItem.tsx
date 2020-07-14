import React from 'react';
import PropTypes from 'prop-types';

export const MovieCardItem = ({ movie }: any) => (
  <section className="movie-card-item my-3">
    <div className="card">
      <div className="position-relative">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : '/assets/images/placeholder.png'
          }
          className="card-img-top img-fluid"
          alt="poster"
        />
        {movie.release_date ? (
          <span>{movie.release_date.slice(0, 4)}</span>
        ) : null}
      </div>
      <div className="card-body p-3">
        <h5 className="card-title mb-0">{movie.title}</h5>
        {movie.genres && movie.genres.length > 0 ? (
          <span className="movie-genre">{movie.genres.join(', ')}</span>
        ) : (
          <span>&nbsp;</span>
        )}
        <span className="badge badge-genre">{movie.vote_average}</span>
      </div>
    </div>
  </section>
);

MovieCardItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
