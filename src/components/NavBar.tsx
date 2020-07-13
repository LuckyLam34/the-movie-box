import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => (
  <section className="navbar container mt-4 pb-0">
    <ul className="nav">
      <li className="nav-item">
        <NavLink to="/" exact activeClassName="active">
          Popular
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/pages/top-rated" activeClassName="active">
          Top Rated
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/pages/upcoming" activeClassName="active">
          Upcoming
        </NavLink>
      </li>
      <li className="nav-item">
        <NavDropdown title="Genre" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Movie List</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">TV List</NavDropdown.Item>
        </NavDropdown>
      </li>
    </ul>
    <hr />
  </section>
);
