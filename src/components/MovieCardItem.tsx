import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
        <OverlayTrigger
          key={movie.id}
          placement="top"
          overlay={<Tooltip id={`tooltip-${movie.id}`}>{movie.title}</Tooltip>}
        >
          <h5 className="card-title mb-0">{movie.title}</h5>
        </OverlayTrigger>
        {movie.genres && movie.genres.length > 0 ? (
          <OverlayTrigger
            key={movie.genres.join(', ')}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${movie.genres.join(', ')}`}>
                {movie.genres.join(', ')}
              </Tooltip>
            }
          >
            <span className="movie-genre">{movie.genres.join(', ')}</span>
          </OverlayTrigger>
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
