import React from 'react';
import { Rating } from './Rating';
import PropTypes from 'prop-types';

export const MovieDetails = ({ details }: any) => (
  <div className="movie-details">
    <h1 className="text-uppercase font-weight-bold">{details.title}</h1>
    {details.genres.map((item: any) => (
      <span key={item}>{item}</span>
    ))}{' '}
    |<span className="ml-3">Duration: {details.duration}</span>
    <br />
    <button type="button" className="btn btn-primary text-uppercase mt-3">
      watch movie
    </button>
    <button
      type="button"
      className="btn btn-outline-white ml-3 mt-3 text-uppercase"
    >
      view info
    </button>
    <button type="button" className="btn btn-link text-uppercase mt-3">
      + Add to wishlist
    </button>
    <Rating
      numberOfReviews={details.numberOfReviews}
      ratingPoint={details.rating}
    />
  </div>
);

MovieDetails.propTypes = {
  details: PropTypes.object.isRequired,
};
