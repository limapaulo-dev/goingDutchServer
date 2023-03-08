import React, { Component } from 'react';
import Funding from './Funding';

class Donate extends Component {
  renderContent() {}
  render() {
    return (
      <main className="container valign-wrapper center-align">
        <div className="row">
          <div className="col s12">
            <h3>This project is free!</h3>
          </div>
          <div className="col s12">
            <h4 className="col s12">But you can still help out</h4>
            <p className="col s12">You can make a small donation to keep this project free. Any donation will be used to improve Going Dutch and help with server costs!</p>
            <p className="col s12">If you use the same email that you are logged in your account will earn the badge of 'Patron'.</p>
            <Funding />
          </div>
        </div>
      </main>
    );
  }
}

export default Donate;
