import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Donate from './Donate';
import Login from './Login';
// import Logout from './auth/Logout';
import About from './About';
import Privacy from './Privacy';
import Dashboard from './Dashboard';
import NewExpense from './NewExpense';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/dashboard/new" component={NewExpense}></Route>
            <Route exact path="/donate" component={Donate}></Route>
            <Route exact path="/login" component={Login}></Route>
            {/* <Route path="/logout" component={Logout}></Route> */}
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/privacy" component={Privacy}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
