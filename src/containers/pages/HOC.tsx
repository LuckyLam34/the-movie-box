import React from 'react';
import { MovieCardItem } from '../../components/MovieCardItem';
import TopBarProgress from 'react-topbar-progress-indicator';
import { getMovieGenres } from '../../redux/actions';
import { IState } from '../../redux/interfaces';
import { connect } from 'react-redux';

export const createMovieComponent = (getMovies: any) => {
  class HOC extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
    }

    componentDidMount() {
      this.props.getMovieGenres().then(() => {
        this.props.getMovies();
      });
    }

    render() {
      return this.props.loading ? (
        <TopBarProgress />
      ) : (
        <div className="container">
          <div className="row">
            {this.props.movies.map((item: any) => (
              <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
                <MovieCardItem movie={item} />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  const mapDispatchToProps = (dispatch: any) => ({
    getMovies: () => dispatch(getMovies()),
    getMovieGenres: () => dispatch(getMovieGenres()),
  });

  const mapStateToProps = (state: IState) => {
    const { loading, movies } = state;
    return { loading, movies };
  };

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
};
