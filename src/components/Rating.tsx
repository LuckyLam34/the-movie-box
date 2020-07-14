import React from 'react';
import PropTypes from 'prop-types';

export const Rating = ({ ratingPoint, numberOfReviews }: any) => {
  const percent = (ratingPoint * 160) / 5 + 'px';

  return (
    <section className="rating p-3">
      <section className="box d-flex">
        <h6 className="mr-2">Rating</h6>
        <span>based on {numberOfReviews} reviews</span>
      </section>
      <div className="back-stars">
        <img src="/assets/images/star-outline.png" alt="star" />
        <img src="/assets/images/star-outline.png" alt="star" />
        <img src="/assets/images/star-outline.png" alt="star" />
        <img src="/assets/images/star-outline.png" alt="star" />
        <img src="/assets/images/star-outline.png" alt="star" />
        <div style={{ width: percent }} className="front-stars">
          <img src="/assets/images/star.png" alt="star" />
          <img src="/assets/images/star.png" alt="star" />
          <img src="/assets/images/star.png" alt="star" />
          <img src="/assets/images/star.png" alt="star" />
          <img src="/assets/images/star.png" alt="star" />
        </div>
        <span className="badge badge-custom">{ratingPoint}</span>
      </div>
    </section>
  );
};

Rating.propTypes = {
  ratingPoint: PropTypes.number.isRequired,
  numberOfReviews: PropTypes.number.isRequired,
};
