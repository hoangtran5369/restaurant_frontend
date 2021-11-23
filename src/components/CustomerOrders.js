import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from "store/auth/reducer";
import { Auth } from "aws-amplify";
import { getUserid, userLoggedIn } from "store/auth/selector";
import { Redirect } from "react-router";
import { getCustomerOrders } from "store/OrderList/reducer";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import {
    Box, List, ListItem, ListItemText, Typography, Accordion, AccordionSummary, AccordionDetails
} from "@material-ui/core";

import { getAllItemDict, getItemById } from "store/FoodMenu/selector";
import moment from "moment";


const OrderItem = (props) => {
    const { id, quantity, specialInstruction, addons, price } = props
    const menuItemDict = useSelector(getAllItemDict);
    const menuItem = menuItemDict[id];
    console.log(menuItem);
    if (!menuItem) {
        console.log("NOPE")
        return <></>;
    }
    return (
        <ListItem alignItems="flex-start">
            <div>
                <ListItemText
                    primary={
                        <Typography variant="body1" color="textPrimary">
                            {menuItem.name} x {quantity} - ${price.toFixed(2)}
                        </Typography>
                    }
                    secondary={
                        <React.Fragment>
                            {addons.map(addon => (
                                <Typography variant="body2" color="textSecondary">
                                    -  {addon}
                                </Typography>

                            ))}
                            {specialInstruction && (
                                <Typography variant="body2" color="textSecondary">
                                    **  {specialInstruction}
                                </Typography>
                            )

                            }
                        </React.Fragment>
                    }

                />
            </ div>
        </ListItem>
    )
}

function OrderDisplay({ order }) {
    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <Typography>Ordered {moment(order.createdTime).calendar()}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>
                            Status: {order.status}
                        </p>
                        <List>
                            {order.items.map((item) => {
                                console.log(item)
                                return (
                                    <OrderItem
                                        id={item.menuItemId}
                                        quantity={item.quantity}
                                        price={item.price}
                                        specialInstruction={item.specialInstruction}
                                        addons={item.addOns} />)
                            })
                            }
                        </List>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}


function CustomerOrder(props) {
    const dispatch = useDispatch();

    const loggedIn = useSelector(userLoggedIn);
    const uID = useSelector(getUserid);
    const orders = useSelector((state) => state.orderList.orders)
    console.log(orders);
    useEffect(() => {
        if (loggedIn) {
            dispatch(getCustomerOrders(uID));
        }
    }, [loggedIn]);

    if (!loggedIn) {
        return <Redirect to="/" />
    }
    return (
        <Box minHeight="100vh" flexDirection="column" display="flex">
            <Navbar />
            <Box
                flexGrow={1}
                display="flex"
                flexDirection="column"
                // justifyContent="space-around"
                color="text.primary"
                paddingTop="5vh"
            >
                <h1>Your current orders</h1>
                <List>
                    <ListItem>
                        {orders.map(order => <OrderDisplay order={order} />)}
                    </ListItem>
                </List>
            </Box>
            <Footer />

        </Box>
    );
}

export default CustomerOrder;