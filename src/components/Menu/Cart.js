import Navbar from "components/Navbar";
import {
  Box,
  Typography,
  List,
  GridList,
  GridListTile,
  Input,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
} from "@material-ui/core";
import styled from "styled-components";
import FoodMenuItem from "components/Menu/MenuItem";
import { useSelector } from "react-redux";
import { getFoodMenuItems } from "store/FoodMenu/selector";
import Order from "components/Menu/Order";
import { getSubtotal } from "store/Order/selector";

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
          <Select>
            <MenuItem>Pickup</MenuItem>
            <MenuItem>Delivery</MenuItem>
            <MenuItem>Grubhub</MenuItem>
            <MenuItem>Ubereats</MenuItem>
          </Select>
        </DeliverySelector>

        <Box height="40vh">
          <Order />
        </Box>
        <Box height="10vh" bgcolor="yellow">
          <Typography variant="h6">Subtotal: {subtotal}</Typography>
        </Box>
      </div>

      <Button variant="contained" fullWidth>
        Checkout
      </Button>
    </Box>
  );
}

export default Menu;
