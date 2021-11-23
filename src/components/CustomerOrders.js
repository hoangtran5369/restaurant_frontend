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

import { getAllItemDict, getItemById, getAllAddonDict } from "store/FoodMenu/selector";
import moment from "moment";
import styled from "styled-components";


const MyList = styled(List)`
    max-width: 600px;
    display: flex;
    flex-direction: column;
`

const OrderItem = (props) => {
    const { id, quantity, specialInstruction, addons, price } = props
    const menuItemDict = useSelector(getAllItemDict);
    const addonDict = useSelector(getAllAddonDict);
    const menuItem = menuItemDict[id];

    const itemAddons = addons.map(addon => addonDict[addon].name)
    if (!menuItem) {
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
                            {itemAddons.map(addon => (
                                <Typography variant="body2" color="textSecondary">
                                    -  {addon || "Unavailable"}
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
                <Box maxWidth="600px">

                {orders.map(order => <OrderDisplay order={order} />)}
                </Box>
            </Box>
            <Footer />

        </Box>
    );
}

export default CustomerOrder;