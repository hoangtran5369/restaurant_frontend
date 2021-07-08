import {
  Box,
  Button,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
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
`

const FormContainer = styled.div`
  width: 50%;
  padding-right: 30px;
`;
const OrderContainer = styled.div`
  width: 50%;
  align-items: stretch;
  padding-left: 30px;
`;
const CheckBoxLabel = styled(props => <FormControlLabel {...props} classes={{label: 'checkbox-label'}}/>)`
  margin-top: 20px;

  & > .checkbox-label {
    font-size: 0.8rem;
  }
`;

const SubmitButton = styled(Button)`
  padding: 10px;
`

function CustomerInfo({ onFinished }) {

  return (
    <Box>
      <MyContainer>
        <FormContainer>
          <form>
            <InfoTextField
              fullWidth
              id="outlined-basic"
              label="First name"

            />
            <InfoTextField
              fullWidth
              id="outlined-basic"
              label="Surname"

            />
            <InfoTextField
              fullWidth
              id="outlined-basic"
              label="Phone number"

            />
            <InfoTextField
              fullWidth id="outlined-basic" label="Email" />
           
          
          </form>
        </FormContainer>

      <OrderInfo>
        
      </OrderInfo>
      </MyContainer>
      
      <Divider variant="middle" />
      <SubmitButton  onClick={onFinished} color="primary" fullWidth variant="contained"> Next   </SubmitButton>
    </Box>
  );
}

export default CustomerInfo;
