import {
  Box,
  Typography,

  Button, 
} from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import Order from "components/Menu/Order";
import { getOrderItems, getSubtotal } from "store/Order/selector";
import { useHistory } from "react-router-dom";


function Menu() {
  const subtotal = useSelector(getSubtotal);
  const history = useHistory();

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
          Shopping cart
        </Typography>       

        <Box height="40vh" overflow="scroll" marginY="20px">
          <Order />
        </Box>
        <Box height="10vh" bgcolor="yellow">
          <Typography variant="h5">Subtotal: {subtotal.toFixed(2)}</Typography>
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
