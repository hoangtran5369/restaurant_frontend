import React from "react";
import {
  Box,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import OrderInfo from "components/CheckOut/OrderInfo";
import { getCardInfo, getClientSecret, getCreditCardText, getCustomerInfo, getPaymentInfo, getPickupTime } from "store/Order/selector";
import { submitOrder } from "store/Order/reducer";
import { StripeCardElementChangeEvent, StripeError } from "@stripe/stripe-js";
import { useStripe } from "@stripe/react-stripe-js";

const MyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  margin-top: 15px;
  margin-bottom: 30px;
`;


const FormContainer = styled.div`
  width: 50%;
  padding-right: 30px;
`;


const SubmitButton = styled(Button)`
  padding: 10px;
`;


function ReviewSubmit({ onFinished }) {
  const dispatch = useDispatch();
  const stripe = useStripe();
   
  const customerInfo = useSelector(getCustomerInfo);
  const paymentInfo = useSelector(getPaymentInfo);
  const creditCardText = "" // useSelector(getCreditCardText)
  const pickupTimeStr = useSelector(getPickupTime);

  const cardElement = useSelector(getCardInfo);
  const clientSecret = useSelector(getClientSecret);

  const onSubmitClicked = async () => {
 
    
//  if (cardElement) {
//     const payload = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//         },
//       });
//       if (payload.error) {    
//         console.log("Error", payload.error);
//       } else {
//         console.log("Success", payload);
        
        
//       }
//     }
    // dispatch(submitOrder())
    if (onFinished) {
      onFinished()
    }
  }

  return (
    <Box>
      <h1>{clientSecret}</h1>
      <MyContainer>
        <FormContainer>
          
          <p>Your details:</p>
          <p>
            {customerInfo.email}  <br/> 
            {`${customerInfo.firstname} ${customerInfo.surname}`} <br/> 
            {customerInfo.phone}  <br/> 
            Order updates will be sent by text message
          </p>
          <p>Delivery option:  <br/> 
          Pickup at: <br/> 
                Pho 28 <br/> 
                2569 King Road <br/> 
                Suite C9 <br/> 
                San Jose, California 95122
                United States <br/>  <br/> 
                Your order will be ready <br/> 
                {moment(pickupTimeStr).calendar()} <br/> 
                Pickup instructions <br/> 
                Customers pick up orders inside the restaurant. <br/> 
          </p>

          <br/> 
          <p>PAYMENT INFORMATION:   <br/> 
                 {creditCardText}
            </p>
          <p> 
              REVIEW & SUBMIT ORDER:  <br/> 
             
          </p>
        </FormContainer>

        <OrderInfo></OrderInfo>
      </MyContainer>

      <SubmitButton
        onClick={onSubmitClicked}
        color="primary"
        fullWidth
        variant="contained"
      >
        Place your Order
      </SubmitButton>
    </Box>
  );
}

export default ReviewSubmit;
