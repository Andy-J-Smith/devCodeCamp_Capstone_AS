import React, {useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from "@stripe/react-stripe-js";
import swal from 'sweetalert'



class CheckoutForm extends React.Component {
  
  handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    const {stripe, elements} = this.props;
    

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      swal({
        title: "Payment Submitted!",
        text: "THANKS!",
        icon: "success",
        button: "Proceed!",
      });
    }
  };
 

  render() {
    
    const {stripe} = this.props;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
        
      </form>
    );
  }
}

export default CheckoutForm;

