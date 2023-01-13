import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Main from './Main';
import Landing from './Landing';
import Footer from './Footer';
const Dashboard = () => <h2>Dashboard</h2>;
const NewBudget = () => <h2>New Budget</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route path="/dashboard/new" component={NewBudget}></Route>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
