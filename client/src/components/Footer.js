import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  renderContent() {}
  render() {
    return (
      <footer className="page-footer deep-orange darken-1 valign-wrapper">
        <div className="row center-align">
          <div className="col s12">
            <a className="grey-text text-lighten-4 center">going dutch © 2023</a>
          </div>
          <div className="col s12">
            <a className="grey-text text-lighten-4 center" href="https://limapaulo.com/" target="_blank">
              created by limapaulo.com
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

// export default connect(mapStateToProps)(Landing);

export default Footer;
