import {
  Box,
  Button,

  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import styled from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";


const MyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  margin-top: 15px;
`;
const FormContainer = styled.div`
  width: 50%;
`;
const OrderContainer = styled.div`
  width: 50%;
  align-items: stretch;
`;
const CheckBoxLabel = styled(props => <FormControlLabel {...props} classes={{label: 'checkbox-label'}}/>)`
  margin-top: 20px;

  & > .checkbox-label {
    font-size: 0.8rem;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`

function CustomerInfo({ onFinished }) {

  return (
    <Box>
      <MyContainer>
        <FormContainer>
          <form>
            <TextField
              id="outlined-basic"
              label="First name"

            />
            <TextField
              id="outlined-basic"
              label="Surname"

            />
            <TextField
              id="outlined-basic"
              label="Phone number"

            />
            <TextField id="outlined-basic" label="Email" />
            <TextField
              id="outlined-basic"
              label="Add a special request"

            />

            <CheckBoxLabel
              control={<Checkbox checked  name="checkedA" />}
              label="Yes, I want to get text updates and reminders about my bookings.*"
            />
            <CheckBoxLabel
              control={<Checkbox checked  name="checkedA" />}
              label="This restaurant will send you dining offers and news by email
              unless you object by unchecking this box."
            />
          
          </form>
        </FormContainer>

        <OrderContainer>
          <h5> Pho 28 </h5>
          <h6> Tuesday, 30 Jun </h6>
          <h6> 9:00 AM </h6>
          <h6> 2 people </h6>
        </OrderContainer>
      </MyContainer>
      <SubmitButton color="primary" fullWidth variant="contained">
        Confirm booking
      </SubmitButton>
    </Box>
  );
}

export default CustomerInfo;
