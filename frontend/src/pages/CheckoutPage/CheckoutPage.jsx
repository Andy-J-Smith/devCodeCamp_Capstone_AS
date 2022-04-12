import React from "react";
import "./CheckoutPage.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import InjectedCheckoutForm from "../../components/InjectedCheckoutForm/InjectedCheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KlIfWJ09XIAoeJupGMpaF7KTJKTIshrlouOOmwjFJ2S52vKIiHv98vMELWzh6RTWuhFLYTsWyUK3U7cAnomp51K00ilYgZnN9"
);

const CheckoutPage = () => {
  return (
    <div>
      <h2 className="checkout-title">Checkout Page</h2>
      <p>Enter Credit Card Information</p>
      <div className="check-container">
        <Elements stripe={stripePromise}>
          <InjectedCheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;
