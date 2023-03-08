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
          <div className="col s9">
            <a  href="/auth/google" className="waves-effect waves-light btn blue white-text  darken-3 googleBtn">
              <img src="assets/googleOAuth/btn_google_light_normal_ios.svg" />
              Continue with Google
            </a>

            {/* Add more auth options (linkedin, github, spotify */}
            {/* <p className="col s12">we store your GoogleId and Email adress for account validation</p> */}
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
