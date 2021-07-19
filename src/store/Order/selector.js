import {createSelector} from "@reduxjs/toolkit";
import {getAllItemDict, getAllAddonDict} from 'store/FoodMenu/selector'

export const orderSelector = state => state.order;


export const getOrderItems = createSelector(
    orderSelector, 
    (order) => order.items
);

export const getOrderItemInfo = createSelector(
    getOrderItems, getAllItemDict, getAllAddonDict,
    (orderQuantityDict, itemDict, addonDict) => {
        const result = Object.entries(orderQuantityDict).map(([orderKey, quantity]) => {
            const orderKeyArr = orderKey.split("---");
            const itemId = orderKeyArr[0];
            const addonIdList = orderKeyArr.slice(1);
            const foundItem = itemDict[itemId];
            const foundAddons = addonIdList.map(id => {
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
                addons: foundAddons
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