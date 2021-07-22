import React from "react";
import {
  Box,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import OrderInfo from "components/CheckOut/OrderInfo";

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

  return (
    <Box>
      <MyContainer>
        <FormContainer>
          <p>Your details:</p>
          <p>
            Your details: hoangtran5369@gmail.com <br/> 
            Hoang Tran <br/> 
            +14083415369  <br/> 
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
                Today after 12:25 PM <br/> 
                Pickup instructions <br/> 
                Customers pick up orders inside the restaurant. <br/> 
          </p>

          <br/> 
          <p>PAYMENT INFORMATION:   <br/> 
                  MASTERCARD ending in 5333 (Exp. 5/2022)
                  </p>
          <p> 
              REVIEW & SUBMIT ORDER:  <br/> 
             
          </p>
        </FormContainer>

        <OrderInfo></OrderInfo>
      </MyContainer>

      <SubmitButton
        onClick={onFinished}
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
