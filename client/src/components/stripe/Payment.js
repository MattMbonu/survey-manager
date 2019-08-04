import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { handlePaymentToken } from "../../redux/actions/billing-actions";

const Payment = ({ handlePaymentToken }) => {
  return (
    <StripeCheckout
      amount={500}
      label="Add Credits Now"
      name="Survey Manager Pro Ltd."
      billingAddress
      shippingAddress
      image="/survey-manager-logo.png"
      panelLabel="Pay Now"
      token={token => handlePaymentToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="waves-effect waves-light btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default connect(
  null,
  { handlePaymentToken }
)(Payment);
