
import React, {useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer, CardNumberElement, CardCvcElement, CardExpiryElement} from "@stripe/react-stripe-js";
import {logEvent, Result, ErrorResult} from "../../utils/util.js";
import swal from 'sweetalert'
import "./CheckoutForm2.css";
import {FaCcStripe} from 'react-icons/fa'



const ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: '18px',
        color: '#424770',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };







class CheckoutForm2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        postal: '',
        errorMessage: null,
        paymentMethod: null,
      };
    }
  
    handleSubmit = async (event) => {
      event.preventDefault();
      const {stripe, elements} = this.props;
      const {name, postal} = this.state;
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      const card = elements.getElement(CardNumberElement);
  
      if (card == null) {
        return;
      }
  
      const payload = await stripe.createPaymentMethod({
        type: 'card',
        card,
        billing_details: {
          name,
          address: {
            postal_code: postal,
          },
        },
      });
  
      if (payload.error) {
        console.log('[error]', payload.error);
        this.setState({
          errorMessage: payload.error.message,
          paymentMethod: null,
        });
      } else {
        console.log('[PaymentMethod]', payload.paymentMethod);
        swal({
            title: "Payment Submitted!",
            text: "THANKS!",
            icon: "success",
            button: "Proceed!",
          });
        this.setState({
          paymentMethod: payload.paymentMethod,
          errorMessage: null,
        });
      }
    };
  
    render() {
      const {stripe} = this.props;
      const {postal, name, paymentMethod, errorMessage} = this.state;
  
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            required
            placeholder="Jenny Rosen"
            value={name}
            onChange={(event) => {
              this.setState({name: event.target.value});
            }}
          />
          <label htmlFor="cardNumber">Card Number</label>
          <CardNumberElement
            id="cardNumber"
            onBlur={logEvent('blur')}
            onChange={logEvent('change')}
            onFocus={logEvent('focus')}
            onReady={logEvent('ready')}
            options={ELEMENT_OPTIONS}
          />
          <label htmlFor="expiry">Card Expiration</label>
          <CardExpiryElement
            id="expiry"
            onBlur={logEvent('blur')}
            onChange={logEvent('change')}
            onFocus={logEvent('focus')}
            onReady={logEvent('ready')}
            options={ELEMENT_OPTIONS}
          />
          <label htmlFor="cvc">CVC</label>
          <CardCvcElement
            id="cvc"
            onBlur={logEvent('blur')}
            onChange={logEvent('change')}
            onFocus={logEvent('focus')}
            onReady={logEvent('ready')}
            options={ELEMENT_OPTIONS}
          />
          <label htmlFor="postal">Postal Code</label>
          <input
            id="postal"
            required
            placeholder="12345"
            value={postal}
            onChange={(event) => {
              this.setState({postal: event.target.value});
            }}
          />
          {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
          {paymentMethod && (
            <Result>Got PaymentMethod: {paymentMethod.id}</Result>
          )}
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
          <label>Powered by <FaCcStripe className='stripe-icon'/></label>
        </form>
      );
    }
  }

  export default CheckoutForm2;