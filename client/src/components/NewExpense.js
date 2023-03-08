import React, { Component } from 'react';

class Landing extends Component {
  renderContent() {}
  render() {
    return (
      <main className="container valign-wrapper center-align">
        <div className="row">
          <div className="col s12">
            <h3>New Expense</h3>
          </div>
          <div className="col s12">
            <p className="col s12">This should be created from a template or just blank</p>
            <p className="col s12">Each expense group should be a separated card</p>
          </div>
        </div>
      </main>
    );
  }
}

export default Landing;
