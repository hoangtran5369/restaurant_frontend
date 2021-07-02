import React from 'react';
import {
    Box,
    Button,
    Divider,
    TextField,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
  } from "@material-ui/core";
  import styled from "styled-components";
  
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
  const OrderContainer = styled.div`
    width: 50%;
    align-items: stretch;
    padding-left: 30px;
  `;
  const CheckBoxLabel = styled((props) => (
    <FormControlLabel {...props} classes={{ label: "checkbox-label" }} />
  ))`
    margin-top: 20px;
  
    & > .checkbox-label {
      font-size: 0.8rem;
    }
  `;
  
  const SubmitButton = styled(Button)`
    padding: 10px;
  `;
  
  const DeliverySelector = styled(FormControl)`
    width: 100%;
  `;
  
  function Delivery({ onFinished }) {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
     }
    return (
      <Box>
        <MyContainer>
          <FormContainer>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="credit" control={<Radio />} label="Credit/Debit card" />
        <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
       </RadioGroup>
          </FormContainer>  


          <OrderContainer>
            <Typography variant="h6" gutterBottom>
              Your reservation at Pho28
            </Typography>
            <Divider />
            <Box padding={2}>
              <Typography variant="body1" gutterBottom>
                Tuesday, 30 Jun
              </Typography>
              <Typography variant="body1" gutterBottom>
                {" "}
                9:00 AM
              </Typography>
              <Typography variant="body1" gutterBottom>
                2 people
              </Typography>
            </Box>
          </OrderContainer>
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
  
  export default Delivery;
  