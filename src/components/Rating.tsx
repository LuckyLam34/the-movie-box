import React from 'react';

export const Rating = () => (
  <div className="rating">
    <div className="back-stars">
      <img src="assets/images/star-outline.png" alt="star" />
      <img src="assets/images/star-outline.png" alt="star" />
      <img src="assets/images/star-outline.png" alt="star" />
      <img src="assets/images/star-outline.png" alt="star" />
      <img src="assets/images/star-outline.png" alt="star" />
      <div style={{ width: '80px' }} className="front-stars">
        <img src="assets/images/star.png" alt="star" />
        <img src="assets/images/star.png" alt="star" />
        <img src="assets/images/star.png" alt="star" />
        <img src="assets/images/star.png" alt="star" />
        <img src="assets/images/star.png" alt="star" />
      </div>
    </div>
  </div>
);
