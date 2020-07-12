import React from 'react';

export const MovieCardItem = () => (
  <section className="movie-card-item">
    <div className="card">
      <div className="position-relative">
        <img
          src="/assets/images/bad-teacher.jpg"
          className="card-img-top img-fluid"
          alt="bacd"
        />
        <span>1997</span>
      </div>
      <div className="card-body p-3">
        <h5 className="card-title mb-0">Bad Teacher Bad teacher bad teacher</h5>

        <span>Action</span>
        <span>Funny</span>
        <span className="badge badge-primary">3.1</span>
      </div>
    </div>
  </section>
);
