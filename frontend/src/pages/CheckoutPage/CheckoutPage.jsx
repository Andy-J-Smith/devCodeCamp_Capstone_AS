import React, {useState, useEffect} from "react";
import axios from "axios";
import "./CheckoutPage.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import InjectedCheckoutForm from "../../components/InjectedCheckoutForm/InjectedCheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KlIfWJ09XIAoeJupGMpaF7KTJKTIshrlouOOmwjFJ2S52vKIiHv98vMELWzh6RTWuhFLYTsWyUK3U7cAnomp51K00ilYgZnN9"
);

const CheckoutPage = () => {

  const [cart_item, setCartItem] = useState([])

  useEffect(() => {
    getCartItem();
  }, []);

  async function getCartItem(){
      let response = await axios.get("http://127.0.0.1:8000/api/subscriptions/all/");
      setCartItem(response.data);
      console.log(response.data)

  }



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
