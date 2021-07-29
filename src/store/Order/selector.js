import {createSelector} from "@reduxjs/toolkit";
import {getAllItemDict, getAllAddonDict} from 'store/FoodMenu/selector'
import creditCardType from 'credit-card-type';

export const orderSelector = state => state.order;


export const getOrderItems = createSelector(
    orderSelector, 
    (order) => order.items
);

export const getOrderItemInfo = createSelector(
    getOrderItems, getAllItemDict, getAllAddonDict,
    (orderDict, itemDict, addonDict) => {
        const result = Object.entries(orderDict).map(([orderKey, order]) => {
            const {itemId, addonIds, quantity, specialInstruction} = order;
            const foundItem = itemDict[itemId];
            const foundAddons = addonIds.map(id => {
                
               return {
                id,
                name: addonDict[id].name,
                price: addonDict[id].price
               }
            })

            return {
                orderKey: orderKey,
                itemId: foundItem.id,
                itemName: foundItem.name,
                itemPrice: foundItem.price,
                quantity: quantity,
                addons: foundAddons,
                specialInstruction
            }
        })
        return result;
    }
)


export const getSubtotal = createSelector(
    getOrderItemInfo,
    (orders) => orders.reduce((sum, order) => {
        const pricePerItem = order.itemPrice + order.addons.reduce((sum, addon) => sum + addon.price, 0);
        return sum + (pricePerItem * order.quantity)
    },0)
)

export const getTipMultiplier = createSelector(
    orderSelector, 
    (orders) => orders.tipMultiplier
)

export const getTip = createSelector(    
    getTipMultiplier, getSubtotal, 
    (tipMultiplier, subtotal) => tipMultiplier*subtotal
)



export const getTaxMultiplier = createSelector(
    orderSelector,
    (order) => order.taxMultiplier
)

export const getTax  = createSelector(
    getTaxMultiplier, getSubtotal,
    (taxMultiplier, subtotal) => subtotal*taxMultiplier
)


export const getTotal = createSelector(    
    getSubtotal,  getTip,  getTax, 
    ( subtotalAmount, tipAmount, taxAmount) => subtotalAmount  + tipAmount + taxAmount 
)

export const orderIsEmpty = createSelector(
    getOrderItems,
    (orderItem) => Object.keys(orderItem).length === 0 
)

export const getCustomerInfo = createSelector(
    orderSelector,
    (order) => order.customerInfo
)

export const getPaymentInfo = createSelector(
    orderSelector,
    (order) => order.paymentInfo
)

export const getCardInfo = createSelector(
    getPaymentInfo,
    (paymentInfo) => paymentInfo.cardInfo
)

export const getCreditCardText = createSelector(
    getCardInfo,
    (cardInfo) => {
        const {cardNum, expiry} = cardInfo;
        const cardMatches = creditCardType(cardNum.replace(/\s/g, ""));
        const cardType = cardMatches.length > 0 ? cardMatches[0].niceType : "Credit card";
        const secondaryText = cardMatches.length > 0 ? ` ending in ${cardNum.split(" ").pop()} (Exp. ${expiry})` : ""
        return cardType + secondaryText;
    }
)

export const getPickupTime = createSelector(
    orderSelector,
    (order) => order.delivery.pickup.time
)

export const getPickupTimeOption = createSelector(
    orderSelector,
    (order) => order.delivery.pickup.option
)