import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import SearchBox from './SearchBox';
import DateString from './DateString';

import '../App.css';

const mapStateToProps = (state) => ({
  reportsData: state.reportsData
});

const mapDispatchToProps = dispatch => ({

});

class Overview extends Component {
  

  render() {
    return (
      <div>
        <header className="dashboard-header">
          <SearchBox placeholder="Store name..."/>
        </header>

        <div className="dashboard-body">
          <table>
            <thead>
              <tr>
                <th>Favourite</th>
                <th>Store</th>
                <th>Date</th>
                <th>Status</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {this.props.reportsData.stores.map(storeData => {
                var lastStoreReport = this.props.reportsData.reports[storeData.id].sort((a, b) => a.date < b.date)[0];

                return {
                  store: storeData.name,
                  date: lastStoreReport.date,
                  passed: lastStoreReport.passed,
                  link: lastStoreReport.link
                };
              })
                .map(report => <tr key={report.store}>
                  <td><input type="checkbox" /></td>
                  <td><Link to={`site/${report.store}`}>{report.store}</Link></td>
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

export default connect(mapStateToProps, mapDispatchToProps)(Overview);