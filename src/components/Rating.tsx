import React from 'react';

export const Rating = ({ ratingPoint }: any) => {
  const percent = (ratingPoint * 125) / 5 + 'px';

  return (
    <div className="rating">
      <div className="container">
        <div className="back-stars">
          <img src="assets/images/star-outline.png" alt="star" />
          <img src="assets/images/star-outline.png" alt="star" />
          <img src="assets/images/star-outline.png" alt="star" />
          <img src="assets/images/star-outline.png" alt="star" />
          <img src="assets/images/star-outline.png" alt="star" />
          <div style={{ width: percent }} className="front-stars">
            <img src="assets/images/star.png" alt="star" />
            <img src="assets/images/star.png" alt="star" />
            <img src="assets/images/star.png" alt="star" />
            <img src="assets/images/star.png" alt="star" />
            <img src="assets/images/star.png" alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
};
