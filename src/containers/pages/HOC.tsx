import React from 'react';
import { MovieCardItem } from '../../components/MovieCardItem';
import TopBarProgress from 'react-topbar-progress-indicator';
import { getMovieGenres } from '../../redux/actions';
import { IState } from '../../redux/interfaces';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

interface ILocalProps {
  getMovies: any;
  getMovieGenres: any;
  setCurrentPage: any;
  resetMovies: any;
  loading: boolean;
  movies: any[];
}

export const createMovieComponent = (
  getMovies: any,
  setCurrentPage?: any,
  resetMovies?: any
) => {
  class HOC extends React.Component<ILocalProps, any> {
    hasMore = false;

    constructor(props: any) {
      super(props);
      this.load = this.load.bind(this);
    }

    componentDidMount() {
      if (setCurrentPage) {
        this.props.setCurrentPage();
      }

      if (resetMovies) {
        this.props.resetMovies();
      }

      this.props.getMovieGenres().then(() => {
        this.props.getMovies();
        this.hasMore = true;
      });
    }

    load() {
      if (!this.props.loading && this.hasMore) {
        this.props.getMovies();
      }
    }

    render() {
      return (
        <div>
          {this.props.loading ? <TopBarProgress /> : null}
          <div
            style={{
              height: '1000px',
              overflow: 'auto',
              marginBottom: '2rem',
            }}
          >
            <InfiniteScroll
              pageStart={0}
              loadMore={this.load}
              hasMore={this.hasMore}
              loader={
                <div className="loader" key={0}>
                  <div className="cubic">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              }
              useWindow={false}
            >
              <div className="container">
                <div className="row">
                  {this.props.movies.map((item: any) => (
                    <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
                      <MovieCardItem movie={item} />
                    </div>
                  ))}
                </div>
              </div>
            </InfiniteScroll>
          </div>
        </div>
      );
    }
  }
  const mapDispatchToProps = (dispatch: any) => ({
    getMovies: () => dispatch(getMovies()),
    getMovieGenres: () => dispatch(getMovieGenres()),
    setCurrentPage: () => dispatch(setCurrentPage()),
    resetMovies: () => dispatch(resetMovies()),
  });

  const mapStateToProps = (state: IState) => {
    const { loading, movies } = state;
    return { loading, movies };
  };

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
};
