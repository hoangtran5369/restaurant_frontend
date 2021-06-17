import {createSelector} from "@reduxjs/toolkit";

export const orderSelector = state => state.order;


export const getOrderItems = createSelector(
    orderSelector, 
    (order) => Object.values(order.items)
);

export const getSubtotal = createSelector(
    getOrderItems,
    (orders) => orders.reduce((accumulator, currOrder) => (accumulator + (currOrder.quantity * currOrder.price)), 0)
)