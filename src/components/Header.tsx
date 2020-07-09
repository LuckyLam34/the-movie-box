import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export const Header = () => (
  <div className="header">
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">THEMOVIEBOX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="mr-auto"></div>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className="text-uppercase" variant="link">
              log in
            </Button>
            <Button className="text-uppercase" variant="primary">
              sign up
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </div>
);
