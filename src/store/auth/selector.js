import {createSelector} from "@reduxjs/toolkit";

export const authSelector = state => state.auth;


export const getUser = createSelector(
    authSelector, 
    (auth) => auth.user
);

export const getUserName = createSelector(
    authSelector, 
    (user) => user.username
);

export const userLoggedIn = createSelector(
    authSelector, 
    auth => auth.authState === "signedin"
)

export const getUserPhone = createSelector(
    authSelector,
    (user) => user.phone
)

export const getUserEmail = createSelector(
    authSelector,
    (user) => user.email
)

export const getUserid = createSelector(
    authSelector,
    (user) => user.id
)


