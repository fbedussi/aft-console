import React, {Component} from 'react';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  latestReports: state.latestReports
});

class Body extends Component {
  formatDate(millisecond) {
    var date = new Date(Number(millisecond));
    return date.toLocaleString();
  }

  render() {
    return (
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
					    {this.props.latestReports.map(report => <tr key={report.store}>
                  <td><input type="checkbox"/></td>
                  <td>{report.store}</td>
                  <td>{this.formatDate(report.date)}</td>
                  <td className={report.passed? "status passed": "status failed"}>{report.passed? "ok" : "failed"}</td>
                  <td><a href={report.link} target="_blank">View</a></td>
                  </tr>)}
            </tbody>
          </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Body);

