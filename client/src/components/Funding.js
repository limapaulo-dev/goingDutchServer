import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Funding extends Component {
  renderContent() {}
  render() {
    return (
      <StripeCheckout 
      name="Going Dutch" 
      currency="USD" 
      panelLabel="Fake tip in ;)" 
      description="This is just a pay system demonstration" 
      image="goingDutchCirc.svg" 
      amount={100} 
      token={(token) => this.props.handleToken(token)} 
      stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button className="btn waves-effect waves-light purple darken-4">Funding</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Funding);
