import React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { ElementsConsumer } from "@stripe/react-stripe-js";
import './InjectedCheckoutForm.css';



const InjectedCheckoutForm = () => {
    return (
      <div>
      <ElementsConsumer>
        {({elements, stripe}) => (
          <CheckoutForm elements={elements} stripe={stripe} />
        )}
      </ElementsConsumer>
      </div>
    );
  };
  export default InjectedCheckoutForm;