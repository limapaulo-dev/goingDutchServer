import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const checkPatron = (userPatron) => {
  if (userPatron) {
    return (
      <li>
        <a href="/privacy">privacy</a>
      </li>
    );
  } else {
    return (
      <li>
        <a className="btn waves-effect waves-light white deep-orange-text text-darken-1" href="/api/logout">
          logout
        </a>
      </li>
    );
  }
};

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/login">login</a>
          </li>
        );
      default:
        return checkPatron(this.props.auth.userPatron);
    }
  }
  render() {
    return (
      <header className="row">
        <nav>
          <div className="nav-wrapper deep-orange darken-1">
            <div className="col s12">
              <Link to={this.props.auth ? '/dashboard' : '/'} className="valign-wrapper left">
                Going Dutch
              </Link>
              {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger right">
                <i className="material-icons">menu</i>
              </a> */}
              {/* <ul className="right hide-on-med-and-down"> */}
              <ul className="right">
                <li>
                  <a href="/about">about</a>
                </li>
                <li>
                  <a href="/privacy">privacy</a>
                </li>
                <li>
                  <a href="/donate">donate</a>
                </li>
                <li>
                  {/* this one should change based on the user being logged in ot not */}
                  <a href="/login">login</a>
                  {/* <a href="/logout">logout</a> */}
                </li>
              </ul>
              {/* <ul className="sidenav" id="mobile-demo">
                <li>
                  <a href="nightmode.html">nightmode</a>
                </li>
                <li>
                  <a href="about.html">about</a>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
                {this.renderContent()}
              </ul> */}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
