import React, { Component } from 'react';

class Dashboard extends Component {
  renderContent() {}
  render() {
    return (
      <main className="container valign-wrapper center-align">
        <div className="row">
          <div className="col s12">
            <h3>Dashboard</h3>
          </div>
          <div className="col s12">
            <h4 className="col s12">All the Shared Expenses created go here</h4>
            <h4 className="col s12">button for new shared expense +</h4>
          </div>
          
          {/* <a className="btn waves-effect waves-light white deep-orange-text text-darken-1" href="/api/budget">
            New Budget
          </a> */}
        </div>
      </main>
    );
  }
}

export default Dashboard;
