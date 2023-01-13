import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a className="btn waves-effect waves-light deep-orange darken-1" href="/auth/google">login</a></li>;
      default:
        return <li><a className="btn waves-effect waves-light white deep-orange-text text-darken-1" href="/api/logout">logout</a></li>;
    }
  }
  render() {
    return (
      <div className="row">
        <nav>
          <div className="nav-wrapper deep-orange darken-1">
            <div className="col s12">
              <a href="#!" className="valign-wrapper left">
                Going Dutch
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger right">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="about.html">about</a>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
                {this.renderContent()}
              </ul>
              <ul className="sidenav" id="mobile-demo">
                <li>
                  <a href="sass.html">Sass</a>
                </li>
                <li>
                  <a href="badges.html">Components</a>
                </li>
                <li>
                  <a href="collapsible.html">Javascript</a>
                </li>
                <li>
                  <a href="mobile.html">Mobile</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
