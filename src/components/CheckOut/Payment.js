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
import { getCardInfo } from "store/Order/selector";
import { setCardInfo } from "store/Order/reducer";

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
  const cardInfo = useSelector(getCardInfo);
  const dispatch = useDispatch();
  const {  handleSubmit, control } = useForm({
    defaultValues: cardInfo
  })
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (data) => { 
    dispatch(setCardInfo(data));
    onFinished();
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
              <Box>
                <Controller
                  control={control}
                  name="cardNum"
                  render={({ field: { onChange: onCardNumChange, value: cardNumValue } }) => {
                    return (
                      <Controller
                        control={control}
                        name="expiry"
                        render={({ field: { onChange: onExpiryChange, value: expiryValue } }) => {
                          return (
                            <Controller
                              control={control}
                              name="cvc"
                              render={({ field: { onChange: onCvcChange, value: cvcValue } }) => {
                                return (
                                  <CreditCardInput
                                    cardNumberInputProps={{ value: cardNumValue, onChange: onCardNumChange }}
                                    cardExpiryInputProps={{ value: expiryValue, onChange: onExpiryChange }}
                                    cardCVCInputProps={{ value: cvcValue, onChange: onCvcChange }}
                                  />
                                )
                              }}
                            />
                          )
                        }}
                      />
                    )
                  }}
                />
              
              </Box>
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
            <Divider ligth />
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

        <SubmitButton onClick={handleSubmit(onSubmit)} color="primary" fullWidth variant="contained"> Next   </SubmitButton>
      </form>
    </Box>
  );
}

export default Payment;
