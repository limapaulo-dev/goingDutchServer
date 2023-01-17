import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Donate from './donate/Donate';
import Login from './auth/Login';
import Logout from './auth/Logout';
import About from './about/About';
import Privacy from './privacy/Privacy';
import Dashboard from './dashboard/Dashboard';
import NewExpense from './dashboard/NewExpense';

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
            <Route path="/dashboard/new" component={NewExpense}></Route>
            <Route path="/donate" component={Donate}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/privacy" component={Privacy}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
