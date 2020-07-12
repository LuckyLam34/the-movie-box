import React from 'react';

export const MovieCardItem = ({ movie }: any) => (
  <section className="movie-card-item my-3">
    <div className="card">
      <div className="position-relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          className="card-img-top img-fluid"
          alt="bacd"
        />
        <span>{movie.release_date.slice(0, 4)}</span>
      </div>
      <div className="card-body p-3">
        <h5 className="card-title mb-0">{movie.title}</h5>
        <span>{movie.genres.join(', ')}</span>
        <span className="badge badge-genre">{movie.vote_average}</span>
      </div>
    </div>
  </section>
);
