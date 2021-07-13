import Navbar from "components/Navbar";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button, 
} from "@material-ui/core";
import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getFoodMenuItems } from "store/FoodMenu/selector";
import Order from "components/Menu/Order";
import { getSubtotal } from "store/Order/selector";
import { useHistory } from "react-router-dom";

const CartContainer = styled.div`
  border: 2px solid grey;
  border-radius: 1rem;
  height: 75vh;
  flex-basis: 300px;
`;

const DeliverySelector = styled(FormControl)`
  width: 100%;
`;

function Menu() {
  const subtotal = useSelector(getSubtotal);
  const history = useHistory();
  const [deliveryOption, setDeliveryOption] = useState("");

  return (
    <Box
      height="70vh"
      padding="1rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <div>
        <Typography variant="h5" align="center">
          Your order
        </Typography>
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

        <Box height="40vh">
          <Order />
        </Box>
        <Box height="10vh" bgcolor="yellow">
          <Typography variant="h5">Subtotal: {subtotal}</Typography>
        </Box>
      </div>

      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          history.push("/checkout");
        }}
      >
        Checkout
      </Button>
    </Box>
  );
}

export default Menu;
