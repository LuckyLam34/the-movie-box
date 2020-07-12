import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Banner } from './containers/Banner';
import './style/style.scss';
import { NavBar } from './components/NavBar';
import { createMovieComponent } from './containers/pages/HOC';
import { getMovies } from './redux/actions';
import { API_URLS } from './utils/api-urls';

const PopularMovies = createMovieComponent(
  getMovies.bind(null, API_URLS.popularMovies)
);

const TopRatedMovies = createMovieComponent(
  getMovies.bind(null, API_URLS.topRated)
);

const UpcomingMovies = createMovieComponent(
  getMovies.bind(null, API_URLS.upcoming)
);

export const Root = ({ store }: any) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Banner} />
      <Route path="/" component={NavBar} />
      <Switch>
        <Route path="/" exact component={PopularMovies} />
        <Route path="/pages/top-rated" exact component={TopRatedMovies} />
        <Route path="/pages/upcoming" exact component={UpcomingMovies} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
