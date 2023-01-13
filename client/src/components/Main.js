import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  renderContent() {}
  render() {
    return (
      <main className="container valign-wrapper center-align">
        <div className="row">
          <div className="col s12">
            <h3>going dutch</h3>
          </div>
          <div className="col s12">
            <h4 className="col s12">share your experiences and expenses</h4>
          </div>
        </div>
      </main>
    );
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

// export default connect(mapStateToProps)(Landing);

export default Main;
