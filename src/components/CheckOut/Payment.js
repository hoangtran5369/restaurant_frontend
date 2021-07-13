import React from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
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

const InfoTextField = styled(TextField)`
  margin-bottom: 10px;
`;

const FormContainer = styled.div`
  width: 50%;
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
  const [value, setValue] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expiredDate, setExpiredDate] = React.useState("");
  const [cardCVV, setCVV] = React.useState("");
  const [cardZipCode, setZipCode] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    let parts = [];
    const formatedString = event.target.value.replace(/\D/g, "").slice(0, 16);

    for (var i = 0, len = formatedString.length; i < len; i += 4) {
      parts.push(formatedString.substring(i, i + 4));
    }
    setCardNumber(parts.join(" "));
  };

  const handleExpiredDateChange = (event) => {
    let parts = [];
    const formatedString = event.target.value.replace(/\D/g, "").slice(0, 4);

    for (var i = 0, len = formatedString.length; i < len; i += 2) {
      parts.push(formatedString.substring(i, i + 2));
    }
    setExpiredDate(parts.join("/"));
  };
  const handleCVVChange = (event) => {
    setCVV(event.target.value.replace(/\D/g, "").slice(0, 3));
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value.replace(/\D/g, "").slice(0, 5));
  };

  return (
    <Box>
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
          {value == "credit" && (
            <Box>
              <TextField
                onChange={handleCardNumberChange}
                value={cardNumber}
                id="creditNumber"
                label="Enter card number"
                variant="outlined"
              />
              <TextField
                id="expiryDate"
                onChange={handleExpiredDateChange}
                value={expiredDate}
                label="Expired date"
                defaultValue="MM/YY"
                variant="outlined"
              />
              <TextField
                id="cvv"
                onChange={handleCVVChange}
                value={cardCVV}
                label="CVV"
                variant="outlined"
              />
              <TextField
                id="zipCode"
                onChange={handleZipCodeChange}
                value={cardZipCode}
                label="Zip Code"
                variant="outlined"
              />
            </Box>
          )}
          {value == "paypal" && (
            <Box>
              <MyText>
                You will be redirected to PayPal to authorize payment, once you
                return you will be able to complete the order.
              </MyText>
            </Box>
          )}
          {value == "cash" && (
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
      <SubmitButton
        onClick={onFinished}
        color="primary"
        fullWidth
        variant="contained"
      >
        {" "}
        Next{" "}
      </SubmitButton>
    </Box>
  );
}

export default Payment;
