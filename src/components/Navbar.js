import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import { userLoggedIn } from "../store/auth/selector";
import { useSelector, useDispatch } from 'react-redux'
import React from "react";
import { logOut } from "../store/auth/reducer";


function Navbar() {
    const history = useHistory();
    const userIsLoggedIn = useSelector(userLoggedIn);
    let userSection;
    const dispatch = useDispatch();
    if (!userIsLoggedIn) {
        userSection = (
            <React.Fragment>
                <Grid item xs={3} component={Button} color="inherit" onClick={() => history.push('/login')}><h3>Login</h3></Grid>
                <Grid item xs={3} component={Button} color="inherit" onClick={() => history.push('/register')}><h3>Register</h3></Grid>
            </React.Fragment>
        )
    } else {
        userSection = (
            <React.Fragment>
                <Grid item xs={3} color="inherit" onClick={() => {}}>Hello, User!</Grid>
                <Grid item xs={3} component={Button} color="inherit" onClick={() => { dispatch(logOut())}}><h3>Log out</h3></Grid>
            </React.Fragment>
        )
    }

    return (
        <AppBar position="sticky">
            <Grid container direction="row" justify="space-between" alignItems="center">

                <Grid container item xs={4} direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={4} onClick={() => history.push('/')}><h1>PHO28</h1></Grid>
                    <Grid item xs={2}><h3>Menu</h3></Grid>
                    <Grid item xs={2}><h3>Promos</h3></Grid>
                    <Grid item xs={2}><h3>Reward</h3></Grid>
                    <Grid item xs={2}><h3>More</h3></Grid>
                </Grid>

                <Grid container item xs={3} direction="row" justify="flex-end" alignItems="center">
                    {userSection}

                    <Grid item xs={3} component={Button} color="inherit" onClick={() => { dispatch(logOut())}}><h3>Cart</h3></Grid>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Navbar;