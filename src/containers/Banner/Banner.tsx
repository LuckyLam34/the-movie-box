import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Header } from '../../components/Header';
import { MovieDetails } from '../../components/MovieDetails';

export class Banner extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      bannerData: [
        {
          id: 1,
          title: 'wrath of the titans',
          alt: 'wrath of the titans banner',
          src: 'img1.jpg',
          genres: ['Fantasy', 'Animation', 'Family'],
          duration: '1h 52m',
          rating: 3,
        },
        // {
        //   src: 'img2.jpg',
        //   alt: 'Fast & Furious banner',
        //   id: 2,
        // },
        // {
        //   src: 'img3.jpg',
        //   alt: 'Transformers banner',
        //   id: 3,
        // },
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
              <div className="container">
                <MovieDetails details={item} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <Header />
      </div>
    );
  }
}
