import React, { Component } from 'react';

class Login extends Component {
  renderContent() {}
  render() {
    return (
      <main className="container valign-wrapper center-align">
        <div className="row">
          <div className="col s12">
            <h3>Login</h3>
          </div>
          <div className="col s12">
            <h4 className="col s12">Continue with Google button</h4>
            <h4 className="col s12">Add more auth options (linkedin, github, spotify)</h4>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;