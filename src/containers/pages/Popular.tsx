import React from 'react';
import { MovieCardItem } from '../../components/MovieCardItem';

export class Popular extends React.Component<any, any> {
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <MovieCardItem />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <MovieCardItem />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <MovieCardItem />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <MovieCardItem />
          </div>
        </div>
      </div>
    );
  }
}
