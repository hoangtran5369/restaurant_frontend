import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getOrderItems } from "store/Order/selector";

const OrderItemImage = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border: 1mm ridge lightgrey;
  border-radius: 0.41rem;
`;

function Order(props) {
  const orderItems = useSelector(getOrderItems);

  return (
    <List dense>
      {orderItems.map((order) => (
        <List>
          <ListItem>
            <OrderItemImage src={order.imageUrl} alt={order.name} />
             <p>{order.name} </p> 
             <p> {order.description}  </p>              
            </ListItem>
          <ListItem>
          <Button  variant="outlined" color="secondary"> - </Button>
          <Button variant="outlined" color="primary"> + </Button>
          <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
          <ListItemText primary={`  ${order.quantity}`} />
            {` $${order.price * order.quantity}`}
            
          </ListItem>
        </List>
      ))}
    </List>
  );
}

export default Order;
