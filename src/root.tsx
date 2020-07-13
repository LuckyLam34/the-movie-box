import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Banner } from './containers/Banner';
import './style/style.scss';
import PopularMovies from './containers/pages/PopularMovies';
import TopRatedMovies from './containers/pages/TopRatedMovies';
import UpcomingMovies from './containers/pages/UpcomingMovies';
import NavBar from './components/NavBar';

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
