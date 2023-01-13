import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  renderContent() {}
  render() {
    return (
      <div className="container valign-wrapper center-align">
        <div className="row">
          <div className="col s12">
            <h3>Going Dutch</h3>
          </div>
          <div className="col s12">
            <h4 className="col s12">Share your experiences and expenses</h4>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

// export default connect(mapStateToProps)(Landing);

export default Landing;
