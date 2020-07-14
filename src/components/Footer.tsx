import React from 'react';

export const Footer = () => (
  <section className="footer pt-3 pb-5">
    <div className="container">
      <div className=" bd-highlight top">
        <div className="py-2 pr-2 pl-0 flex-grow-1 bd-highlight">
          THEMOVIEBOX
        </div>
        <div className="p-2 bd-highlight">
          <a href="/">About</a>
        </div>
        <div className="p-2 bd-highlight">
          <a href="/">Movies</a>
        </div>
        <div className="p-2 bd-highlight">
          <a href="/">Ratings</a>
        </div>
        <div className="py-2 pl-2 pr-0 bd-highlight">
          <a href="/">Contact</a>
        </div>
      </div>
      <hr className="mb-1" />
      <div className=" bd-highlight bottom">
        <div className="py-2 pl-0 pr-2 flex-grow-1 bd-highlight">
          Designed by Milan Houter. All rights reserved.
        </div>
        <div className="p-2 bd-highlight">
          <a href="/">
            <img src="/assets/images/fa-icon.png" alt="facebook" />
          </a>
        </div>
        <div className="p-2 bd-highlight">
          <a href="/">
            <img src="/assets/images/in-icon.png" alt="instagram" />
          </a>
        </div>
        <div className="p-2 bd-highlight">
          <a href="/">
            <img src="/assets/images/tw-icon.png" alt="twitter" />
          </a>
        </div>
        <div className="py-2 pl-2 pr-0 bd-highlight">
          <a href="/">
            <img src="/assets/images/pin-icon.png" alt="pin" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
