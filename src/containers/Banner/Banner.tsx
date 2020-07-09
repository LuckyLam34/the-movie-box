import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Header } from '../../components/Header/Header';
import './Banner.scss';

export class Banner extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      bannerData: [
        {
          src: 'img1.jpg',
          alt: 'Movie banner',
          id: 1,
        },
        {
          src: 'img2.jpg',
          alt: 'Fast & Furious banner',
          id: 2,
        },
        {
          src: 'img3.jpg',
          alt: 'Transformers banner',
          id: 3,
        },
      ],
    };
  }

  render() {
    const { bannerData } = this.state;

    return (
      <div className="banner">
        <Carousel>
          {bannerData.map((item: any) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={`/assets/images/${item.src}`}
                alt={item.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Header />
      </div>
    );
  }
}
