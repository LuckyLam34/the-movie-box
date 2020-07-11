import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export const Header = () => {
  const [showIcon, setShowIcon] = useState(true);

  return (
    <section className="header">
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">THEMOVIEBOX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="mr-auto"></div>
            <form className="form-inline my-2 my-lg-0">
              <img
                onClick={() => {
                  setShowIcon(false);
                }}
                className={showIcon ? 'show' : 'hide'}
                src="/assets/images/search-icon.png"
              />
              <input
                onBlur={() => {
                  setShowIcon(true);
                }}
                className={
                  (!showIcon ? 'show' : 'hide') + ' form-control mr-sm-2'
                }
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-link text-uppercase" type="button">
                log in
              </button>
              <button className="btn btn-primary text-uppercase" type="submit">
                sign up
              </button>
            </form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </section>
  );
};
