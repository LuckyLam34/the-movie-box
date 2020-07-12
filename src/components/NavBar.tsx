import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => (
  <section className="navbar container mt-4">
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
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </li>
    </ul>
    <hr />
  </section>
);
