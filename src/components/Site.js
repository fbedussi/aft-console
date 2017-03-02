import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';
import DateString from './DateString';

const mapStateToProps = (state) => ({
   reportsData: state.reportsData
});

class Site extends Component {
  render() {
     var store = this.props.reportsData.stores.filter(storeData => storeData.name === this.props.params.name);
    var storeId = null;
    
    if (store.length) {
      storeId = store[0].id;
    } else {
      return (
        <div class="alert">I've not found any store with name {this.props.params.name}</div>
      );
    }

    return (
      <div>
        <header className="dashboard-header">
        <h1>{this.props.siteName}</h1>
        <SearchBox placeholder="Build number..."/>
      </header>
        
        <div className="dashboard-body">
        <table>
          <thead>
            <tr>
              <th>Build</th>
              <th>Date</th>
              <th>Status</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {this.props.reportsData.reports[storeId]
                .map(report => <tr key={report.build}>
                  <td>{report.build}</td>
                  <td><DateString milliseconds={report.date}/></td>
                  <td className={report.passed ? "status passed" : "status failed"}>{report.passed ? "ok" : "failed"}</td>
                  <td><a href={report.link} target="_blank">View</a></td>
                </tr>)}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Site);

