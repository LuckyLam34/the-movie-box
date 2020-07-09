import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import PropTypes from 'prop-types';
import React from 'react';
import { Header } from './containers/Header/Header';
import { A } from './components/a';
import { B } from './components/b';

export const Root = ({ store }: any) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Header}></Route>
      <Switch>
        <Route path="/a" component={A}></Route>
        <Route path="/b" component={B}></Route>
        <Route path="/" exact component={App}></Route>
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
