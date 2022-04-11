import React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { ElementsConsumer } from "@stripe/react-stripe-js";



const InjectedCheckoutForm = () => {
    return (
      <ElementsConsumer>
        {({elements, stripe}) => (
          <CheckoutForm elements={elements} stripe={stripe} />
        )}
      </ElementsConsumer>
    );
  };
  export default InjectedCheckoutForm;