import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Banner } from './containers/Banner/Banner';
import './style/style.scss';
import { NavBar } from './components/NavBar';
import { Popular } from './containers/pages/Popular';
import { TopRated } from './containers/pages/TopRated';
import { Upcoming } from './containers/pages/Upcoming';

export const Root = ({ store }: any) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Banner} />
      <Route path="/" component={NavBar} />
      <Switch>
        <Route path="/" exact component={Popular} />
        <Route path="/pages/top-rated" exact component={TopRated} />
        <Route path="/pages/upcoming" exact component={Upcoming} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
