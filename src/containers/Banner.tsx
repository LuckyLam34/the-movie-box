import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Header } from '../components/Header';
import { MovieDetails } from '../components/MovieDetails';

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
          rating: 3.4,
          numberOfReviews: 237,
        },
        {
          id: 2,
          title: 'Fast & Furious',
          alt: 'Fast & Furious banner',
          src: 'img2.jpg',
          genres: ['Action', 'Thriller'],
          duration: '1h 47m',
          rating: 4,
          numberOfReviews: 237,
        },
        {
          id: 3,
          title: 'Transformers',
          alt: 'Transformers banner',
          src: 'img3.jpg',
          genres: ['Action', 'Adventure', 'Sci-Fi'],
          duration: '1h 47m',
          rating: 2.1,
          numberOfReviews: 733,
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
              <div className="details pb-4">
                <div className="container">
                  <MovieDetails details={item} />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <Header />
      </div>
    );
  }
}
