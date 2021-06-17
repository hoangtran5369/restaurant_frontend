import {createSelector} from "@reduxjs/toolkit";

export const foodMenuSelector = state => state.foodMenu;


export const getFoodMenuItems = createSelector(
    foodMenuSelector, 
    (foodMenu) => foodMenu.items
);
