import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

import Header from './components/Header';
import Body from './components/Body';

const mapStateToProps = (state) => ({
	
});

const mapDispatchToProps = dispatch => ({
	
});


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);