import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardHeader,
  StepLabel,
  Step,
  Stepper,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import styled from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MenuItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SelectRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 4;
  justify-content: space-around;
  align-items: stretch;
  margin-top: 15px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
`;
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
const CheckBoxLable = styled(FormControlLabel)`
  font-size: 5px;
`;

function CustomerInfo({ onFinished }) {
  const steps = ["Find a table", "Your detail"];

  return (
    <Box>
      <MyContainer>
        <FormContainer>
          <form>
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Add a special request"
              variant="outlined"
            />
            <h6>
              <Checkbox name="checkedA" />
              Yes, I want to get text updates and reminders about my bookings.*
            </h6>
            <h6>
              <Checkbox name="checkedA" />
              This restaurant will send you dining offers and news by email
              unless you object by unchecking this box.
            </h6>
          </form>
        </FormContainer>

        <OrderContainer>
          <h5> Pho 28 </h5>
          <h6> Tuesday, 30 Jun </h6>
          <h6> 9:00 AM </h6>
          <h6> 2 people </h6>
        </OrderContainer>
      </MyContainer>
      <Button color="secondary" fullWidth variant="contained">
        Confirm booking
      </Button>
    </Box>
  );
}

export default CustomerInfo;
