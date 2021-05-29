import {createSelector} from "@reduxjs/toolkit";

export const authSelector = state => state.auth;


export const getUser = createSelector(
    authSelector, 
    (auth) => auth.user
);

export const userLoggedIn = createSelector(
    getUser,
    (user) => (user.id != "")
)

