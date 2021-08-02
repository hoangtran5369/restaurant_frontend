import {createSelector} from "@reduxjs/toolkit";

export const authSelector = state => state.auth;


export const getUser = createSelector(
    authSelector, 
    (auth) => auth.user
);

export const getUserName = createSelector(
    getUser, 
    (user) => user
);

export const userLoggedIn = createSelector(
    authSelector, 
    auth => auth.authState === "signedin"
)

