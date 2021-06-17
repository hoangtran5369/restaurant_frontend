import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getOrderItems } from 'store/Order/selector';



function Order(props) {
    const orderItems = useSelector(getOrderItems)

    return (

        <List dense>
            {orderItems.map(order => (
                <ListItem>
                    <ListItemText primary={`${order.name} x ${order.quantity}`} />
                    <ListItemSecondaryAction> {`$${(order.price * order.quantity)}`}</ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>

    );
}

export default Order;