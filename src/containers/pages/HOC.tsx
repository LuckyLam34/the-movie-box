import React from 'react';
import { MovieCardItem } from '../../components/MovieCardItem';
import TopBarProgress from 'react-topbar-progress-indicator';
import { getMovieGenres } from '../../redux/actions';
import { IState } from '../../redux/interfaces';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { getMovies } from './../../redux/actions/index';

export const createMovieComponent = (getMovies: any, setCurrentPage?: any) => {
  class HOC extends React.Component<any, any> {
    hasMore = false;

    constructor(props: any) {
      super(props);
      this.load = this.load.bind(this);
    }

    componentDidMount() {
      if (setCurrentPage) {
        this.props.setCurrentPage();
      }
      this.props.getMovieGenres().then(() => {
        this.props.getMovies();
        this.hasMore = true;
        console.log('set');
      });
    }

    load() {
      console.log(this.hasMore);
      if (!this.props.loading && this.hasMore) {
        // console.log('load more');
        this.props.getMovies();
      }
    }

    render() {
      return (
        <div>
          {this.props.loading ? <TopBarProgress /> : null}
          <div style={{ height: '1000px', overflow: 'auto' }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.load}
              hasMore={this.hasMore}
              loader={
                <div className="loader" key={0}>
                  Loading ...
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
  });

  const mapStateToProps = (state: IState) => {
    const { loading, movies } = state;
    return { loading, movies };
  };

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
};
