import {
  Box,
  Button,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
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
  return (
    <Box>
      <MyContainer>
        <FormContainer>
          <DeliverySelector>
            <InputLabel>Delivery option</InputLabel>
            <Select>
              <MenuItem>Pickup</MenuItem>
              <MenuItem>Delivery</MenuItem>
              <MenuItem>Grubhub</MenuItem>
              <MenuItem>Ubereats</MenuItem>
            </Select>
          </DeliverySelector>
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
