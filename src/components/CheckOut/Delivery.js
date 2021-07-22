import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import styled from "styled-components";
import OrderInfo from "components/CheckOut/OrderInfo";
import { useState } from "react";

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

const DeliverySelector = styled(FormControl)`
  width: 100%;
`;

const MyText = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
`;

function Delivery({ onFinished }) {
  const [deliveryOption, setDeliveryOption] = useState("");
  const [pickUpTimeOption, setPickUpTimeOption] = useState("");
  const hours = [
    { label: "8:00 AM", value: 0 },
    { label: "10:00 AM", value: 1 },
    { label: "12:00 PM", value: 2 },
    { label: "2:00 PM", value: 3 },
  ];
  const dates = [
    { label: "Jun 21", value: 0 },
    { label: "Jun 22", value: 1 },
    { label: "Jun 23", value: 2 },
    { label: "Jun 24", value: 3 },
    { label: "Jun 25", value: 4 },
    { label: "Jun 26", value: 5 },
  ];
  return (
    <Box>
      <MyContainer>
        <FormContainer>
          <DeliverySelector>
            <InputLabel>Delivery option</InputLabel>
            <Select
              value={deliveryOption}
              onChange={(event) => {
                setDeliveryOption(event.target.value);
              }}
            >
              <MenuItem value="Pickup">Pickup</MenuItem>
              <MenuItem value="Doordash">DoorDash</MenuItem>
              <MenuItem value="Grubhub">Grubhub</MenuItem>
              <MenuItem value="Ubereats">Ubereats</MenuItem>
            </Select>
          </DeliverySelector>
          {deliveryOption === "Pickup" && (
            <Box>
              <p>Pickup at</p>
              <MyText>Pho 28</MyText>
              <MyText>1 Washington Square</MyText>
              <MyText>San Jose, CA 95112</MyText>
              <MyText>United States</MyText>
              <RadioGroup
                value={pickUpTimeOption}
                onChange={(event) => {
                  setPickUpTimeOption(event.target.value);
                }}
              >
                <FormControlLabel
                  value="now"
                  control={<Radio />}
                  label="As soon as possible"
                />
                <FormControlLabel
                  value="later"
                  control={<Radio />}
                  label="Schedule for later"
                />
              </RadioGroup>
              {pickUpTimeOption === "now" && (
                <Box>
                  <MyText>Your order will be ready</MyText>
                  <MyText>Today after 1:00 PM</MyText>
                  <MyText>
                    Customers pick up orders inside the restaurant.
                  </MyText>
                </Box>
              )}
              {pickUpTimeOption === "later" && (
                <Box>
                  <Select
                    disableUnderline
                    fullWidth
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={0}
                    onChange={() => {}}
                    label="Date"
                  >
                    {dates.map(({ label, value }) => {
                      return <MenuItem value={value}> {label} </MenuItem>;
                    })}
                  </Select>

                  <Select
                    disableUnderline
                    fullWidth
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={0}
                    onChange={() => {}}
                    label="Date"
                  >
                    {hours.map(({ label, value }) => {
                      return <MenuItem value={value}> {label} </MenuItem>;
                    })}
                  </Select>
                  <MyText>Your order will be ready</MyText>
                  <MyText>Today after 2:00 PM</MyText>
                  <MyText>
                    Customers pick up orders inside the restaurant.
                  </MyText>
                </Box>
              )}
            </Box>
          )}
          {["Doordash", "Grubhub", "Ubereats"].includes(deliveryOption) && (
            <Box>
              <MyText>
                <br />
                This option is coming soon !
              </MyText>
            </Box>
          )}
        
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

export default Delivery;
