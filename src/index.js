import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import { init } from './actions';
import { Router, Route, browserHistory } from 'react-router'

import Overview from './components/Overview';
import Site from './components/Site';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

function run() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Overview}/> 
        <Route path="/site/:name" component={Site} />
      </Router>
    </Provider>, document.getElementById('root')
  );
}

//run();
store.subscribe(run);
store.dispatch(init());

