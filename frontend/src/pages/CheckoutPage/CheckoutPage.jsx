import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CheckoutPage.css";
import useAuth from "../../hooks/useAuth";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import InjectedCheckoutForm from "../../components/InjectedCheckoutForm/InjectedCheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KlIfWJ09XIAoeJupGMpaF7KTJKTIshrlouOOmwjFJ2S52vKIiHv98vMELWzh6RTWuhFLYTsWyUK3U7cAnomp51K00ilYgZnN9"
);

const CheckoutPage = () => {
  const [cart_item, setCartItem] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getCartItem();
  }, []);

  async function getCartItem() {
    let response = await axios.get(
      "http://127.0.0.1:8000/api/subscriptions/all/"
    );
    setCartItem(response.data);
    console.log(response.data);
  }
  const filteredItem = cart_item.filter(item => item.price === 35);
  console.log(filteredItem)
  console.log(user.username)
  return (
    <div>
      <h2 className="checkout-title">Checkout Page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Package</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart_item &&
            cart_item.map((cart_item, index) => {
              return (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{cart_item.subscription_type}</td>
                  <td>{cart_item.price}.00</td>
                </tr>
              );
            })}
        </tbody>
      </table>
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
