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
    (foodMenu) => foodMenu.categories
)

export const getCategoryNames = createSelector(
    foodMenuSelector,
    (foodMenu) => foodMenu.categories.map(cat => cat.name)
)

export const getCategoryIndex = createSelector(
    foodMenuSelector,
    (foodMenu) => foodMenu.categoryIndex
)

export const getCurrCategory = createSelector(
    getCategories, getCategoryIndex, 
    (categories, index) => index === -1 ? null : categories[index]
)

export const getFilteredItems = createSelector(
    getFoodMenuItems, getCurrCategory,
    (foodMenuItems, category) => foodMenuItems.filter(item => (category === null || item.categoryId === category.id))
)