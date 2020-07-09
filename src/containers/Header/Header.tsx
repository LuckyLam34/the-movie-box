import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Header.scss';

export class Header extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Carousel className="header">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/img1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/img2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/img3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
