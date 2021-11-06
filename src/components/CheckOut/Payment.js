import React, { useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import OrderInfo from "components/CheckOut/OrderInfo";
import CreditCardInput from 'react-credit-card-input';
import { useDispatch, useSelector } from "react-redux";
import { getCardInfo, getSubtotal, getTotal } from "store/Order/selector";
import { setCardInfo, setClientSecret, submitOrder } from "store/Order/reducer";
import {paymentIntent} from "store/Order/api"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CardField from "components/CheckOut/CardField";
import { StripeCardElementChangeEvent, StripeError } from "@stripe/stripe-js";
import { ConsoleLogger } from "@aws-amplify/core";
import { useState } from "react";


const MyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const FormContainer = styled.div`
  width: 60%;
  padding-right: 30px;
`;

const SubmitButton = styled(Button)`
  padding: 10px;
`;

const MyText = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
`;

function Payment({ onFinished }) {
  const stripe = useStripe();
  const element = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const cardInfo = useSelector(getCardInfo);
  const paymentAmount = useSelector(getTotal)
  const dispatch = useDispatch();
  const {  handleSubmit, control, setError, clearErrors } = useForm({
    defaultValues: cardInfo
  })
  const [value, setValue] = React.useState("credit");
   useEffect (() => { 
      dispatch(submitOrder()).then(result => setClientSecret(result.payload.payment.clientSecret))    
      // paymentIntent(paymentAmount).then(result =>  setClientSecret(result["clientSecret"]))             
      }, []);
    
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = async (data) => {

    const cardElement = element.getElement(CardElement);
    console.log(cardElement);
    if (cardElement) {
      const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
          },
        });
        if (payload.error) {    
          console.log("Error", payload.error);
        } else {
          console.log("Success", payload);         
          
        }
      }
   
    // onFinished();
  }

  const clearErrorsBeforeChange = (changeHandler) => (e) => {
    clearErrors();
    changeHandler(e);
  }



  return (
    <Box>    
      <form>
        <MyContainer>
          <FormContainer>

            <RadioGroup value={value} onChange={handleChange}>
              <FormControlLabel
                value="credit"
                control={<Radio />}
                label="Credit/Debit card"
              />
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="Paypal"
              />
              <FormControlLabel value="cash" control={<Radio />} label="Cash" />
            </RadioGroup>
            {value === "credit" && (
              <CardField />               
            )}
            {value === "paypal" && (
              <Box>
                <MyText>
                  You will be redirected to PayPal to authorize payment, once you
                  return you will be able to complete the order.
              </MyText>
              </Box>
            )}
            {value === "cash" && (
              <Box>
                <MyText>
                  Please make the payment at the counter / cashier to finish this
                  order!.
              </MyText>
              </Box>
            )}
            <Divider />
            <br />
          Coupon code:
          <Box>
              <TextField
                id="couponCode"
                label="Enter the coupon code"
                variant="outlined"
              />
            </Box>
          </FormContainer>

          <OrderInfo></OrderInfo>
        </MyContainer>

        <Divider variant="middle" />

        <SubmitButton onClick={handleSubmit(onSubmit)} color="primary" fullWidth variant="contained"> Confirm Payment   </SubmitButton>
      </form>
    </Box>
  );
}

export default Payment;
