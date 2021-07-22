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
            <InfoTextField
              fullWidth
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
          <Typography variant="h6" gutterBottom>Your reservation at Pho28</Typography>
          <Divider />
          <Box padding={2}>

          <Typography variant="body1" gutterBottom>Tuesday, 30 Jun</Typography>
          <Typography variant="body1" gutterBottom> 9:00 AM</Typography>
          <Typography variant="body1" gutterBottom>2 people</Typography>
          </Box>
        </OrderContainer>
      </MyContainer>
      
      <Divider variant="middle" />
      <SubmitButton color="primary" fullWidth variant="contained">
        Confirm booking
      </SubmitButton>
    </Box>
  );
}

export default CustomerInfo;
