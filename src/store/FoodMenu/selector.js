import {createSelector} from "@reduxjs/toolkit";

export const foodMenuSelector = state => state.foodMenu;


export const getFoodMenuItems = createSelector(
    foodMenuSelector, 
    (foodMenu) => foodMenu.items
);

export const itemIsDisplayed = createSelector(
    foodMenuSelector,
    (foodMenu) => (foodMenu.displayingItem != null)
)

export const getDisplayedItem = createSelector(
    foodMenuSelector,
    (foodMenu) => foodMenu.displayingItem
)

export const getCategories = createSelector(
    foodMenuSelector,
    (foodMenu) => foodMenu.categories.map(cat => cat.name)
)