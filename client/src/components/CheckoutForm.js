import './App.css';
import React, { useState } from 'react';
import {
  // CardNumberElement,
  // CardExpiryElement,
  // CardCvcElement,
  CardElement, useElements, useStripe
} from '@stripe/react-stripe-js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formFields: {
    width: '94%',
    margin: 'auto',
  },
  formField: {
    marginTop: '0.3rem',
    marginBottom: '0.3rem',
    borderRadius: '0.2rem',
  },
  cardDetails: {
    width: '94%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem',
    marginBottom: '1.6rem',
    lineHeight: '2rem',
    paddingTop: '1rem',
    borderBottom: '1px solid rgba(5,5,5,0.3)',
    borderRadius: '0.2rem',
  },
  submitButton: {
    borderRadius: 0,
    backgroundColor: 'var(--cartbutton-color)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'var(--other-color)',
    },
    width: '100%',
    height: '2.25rem',
  }
}));

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#005b9',
      color: '#060606',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#000',
      },
      '::placeholder': {
        color: '#606060',
      },
    },
    invalid: {
      iconColor: '#454545',
      color: '#555555',
    },
  },
};

const CardField = (props, { onChange }) => (
  <div className={props.className}>
    <CardElement
      options={CARD_OPTIONS} onChange={onChange} />
    {/* <CardNumberElement /> */}
  </div>
);

const Field = ({
  className,
  label,
  id,
  type,
  required,
  autoComplete,
  value,
  onChange,
}) => (
    <div className="FormRow">
      <TextField
        className={className}
        id={id}
        label={label}
        variant='standard'
        fullWidth
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );

const SubmitButton = (props, { processing, error, children, disabled }) => (
  <Button
    className={props.className}
    fullWidth
    type="submit"
    disabled={processing || disabled}
  >
    Pay ( ${parseFloat(props.total).toFixed(2)} )
    {processing ? 'Processing...' : children}
  </Button>
);

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
  </div>
);

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: '',
    phone: '',
    name: '',
  });

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const result = await stripe.confirmCardPayment(props.cs, {
      payment_method: {
        card: elements.getElement(CardElement),
        // billing_details: {
        //   name: '',
        // },
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
    if (error) {
      elements.getElement('card').focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
      setTimeout(reset, 3000);
    } else {
      setPaymentMethod(payload.paymentMethod);
    }
  };

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      email: '',
      phone: '',
      name: '',
    });
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultMessage">
        <Typography paragraph={true} align='left'>
          Thanks for your purchase. An email will be sent to:
        </Typography>
        <Typography align='center'>
          {billingDetails.email}
        </Typography>
        <Typography paragraph={true} align='left'>
          For payment inquiries, please provide us with the following payment ID:
        </Typography>
        <Typography align='center'>
          {paymentMethod.id}
        </Typography>
      </div>
    </div>
  ) : (
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formFields}>
          <Field
            className={classes.formField}
            label="Your name"
            id="name"
            type="text"
            required
            autoComplete="name"
            value={billingDetails.name}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, name: e.target.value });
            }}
          />
          <Field
            className={classes.formField}
            label="Your email"
            id="email"
            type="email"
            required
            autoComplete="email"
            value={billingDetails.email}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, email: e.target.value });
            }}
          />
          <Field
            className={classes.formField}
            label="Your phone"
            id="phone"
            type="tel"
            required
            autoComplete="tel"
            value={billingDetails.phone}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, phone: e.target.value });
            }}
          />
        </div>
        <CardField
          className={classes.cardDetails}
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
        {/* {error ? setTimeout(reset, 3000) : null} */}
        {error ? 'There was an issue with your card details, try again.' : null}
        <SubmitButton
          className={classes.submitButton}
          total={props.total}
          processing={processing} error={error} disabled={!stripe}>
        </SubmitButton>
      </form>
    );
};



export default CheckoutForm;