import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Typography, Menu, MenuItem } from "@material-ui/core";
import { userLoggedIn } from "../store/auth/selector";
import { useSelector, useDispatch } from 'react-redux'
import React from "react";
import { logOut } from "../store/auth/reducer";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
    background-color: rgb(42, 65, 44);
    color: white;
`

const Title = styled(Typography)`
    margin: 0.5rem;
`

const MenuGroup = styled.div`
    flex-grow: 1;
`
const MenuPopup = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
      <Button color="inherit" onClick={handleClick}>
        <h3>Menu</h3>
      </Button>
      <Menu
        id="resturant-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Breakfast</MenuItem>
        <MenuItem onClick={handleClose}>Lunch</MenuItem>
        <MenuItem onClick={handleClose}>Dinner</MenuItem>
      </Menu>
    </React.Fragment>
    )
}

const MorePopup = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
      <Button color="inherit" onClick={handleClick}>
        <h3>More</h3>
      </Button>
      <Menu
        id="more-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option1</MenuItem>
        <MenuItem onClick={handleClose}>Option2</MenuItem>
        <MenuItem onClick={handleClose}>Option3</MenuItem>
      </Menu>
    </React.Fragment>
    )
}


function Navbar() {
    const history = useHistory();
    const userIsLoggedIn = useSelector(userLoggedIn);
    let userSection;
    const dispatch = useDispatch();
    if (!userIsLoggedIn) {
        userSection = (
            <React.Fragment>
                <Button color="inherit" onClick={() => history.push('/login')}><h3>Login</h3></Button>
                <Button color="inherit" onClick={() => history.push('/register')}><h3>Register</h3></Button>

            </React.Fragment>
        )
    } else {
        userSection = (
            <React.Fragment>
                <Button color="inherit" onClick={() => { }}><h3>Hello, User!</h3></Button>
                <Button color="inherit" onClick={() => dispatch(logOut())}><h3>Log out</h3></Button>
            </React.Fragment>
        )
    }

    return (
        <StyledAppBar position="sticky" color="inherit">
            <Toolbar>
                <Title variant="h4" onClick={() => history.push('/')}>
                    PHO 28
                </Title>

                <MenuGroup>
                    <MenuPopup />
                    <Button color="inherit"><h3>Promos</h3></Button>
                    <Button color="inherit"><h3>Reward</h3></Button>
                    <MorePopup />
                </MenuGroup>

                {userSection}

            </Toolbar>
        </StyledAppBar>
    );
}

export default Navbar;