import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

class Funding extends Component {
  render() {
    return (
      <StripeCheckout name="Going Dutch" currency="USD" panelLabel="Tip in" description="Help fund this project with $1.00" image="goingDutchCirc.svg" amount={100} token={(token) => console.log(token)} stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button className="btn waves-effect waves-light deep-orange darken-1">funding</button>
      </StripeCheckout>
    );
  }
}

export default Funding;
