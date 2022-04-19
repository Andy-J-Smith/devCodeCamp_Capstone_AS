import React from "react";
import { ElementsConsumer } from "@stripe/react-stripe-js";
import './InjectedCheckoutForm.css';
import CheckoutForm2 from "../CheckoutForm/CheckoutForm2";



const InjectedCheckoutForm = () => {
    return (
      <div className="injected-form">
      <ElementsConsumer>
        {({elements, stripe}) => (
          <CheckoutForm2 elements={elements} stripe={stripe} />
        )}
      </ElementsConsumer>
      </div>
    );
  };
  export default InjectedCheckoutForm;