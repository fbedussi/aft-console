import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
   reportsData: state.reportsData
});

class SearchBox extends Component {
  
  render() {
    return (
        <input type="text" placeholder={this.props.placeholder}/>
    );
  }
}

export default connect(mapStateToProps)(SearchBox);

