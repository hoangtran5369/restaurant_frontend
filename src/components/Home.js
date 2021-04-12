import { Link, useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Box, Grid } from "@material-ui/core";
// import MenuIcon from '@material-ui/icons/Menu';


function Home() {
    const history = useHistory()
    return (
        <div>
            <AppBar position="sticky">
                <Grid container direction="row" justify="space-between" alignItems="center">

                    <Grid container item xs={4} direction="row" justify="flex-start" alignItems="center">
                        <Grid item xs={4}><h1>PHO28</h1></Grid>
                        <Grid item xs={2}><h3>Menu</h3></Grid>
                        <Grid item xs={2}><h3>Promos</h3></Grid>
                        <Grid item xs={2}><h3>Reward</h3></Grid>
                        <Grid item xs={2}><h3>More</h3></Grid>
                    </Grid>

                    <Grid container item xs={3} direction="row" justify="flex-end" alignItems="center">
                        <Grid item xs={3} component={Button} color="inherit" onClick={() => history.push('/login')}>
                            <h3>Login</h3>
                        </Grid>
                        <Grid item xs={3} component={Button} color="inherit" onClick={() => {}}><h3>Register</h3></Grid>
                        <Grid item xs={3} component={Button} color="inherit" onClick={() => {}}><h3>Cart</h3></Grid>
                    </Grid>
                </Grid>

            </AppBar>
            <Box minHeight="100vh" flexDirection="column" display="flex">
                <Box bgcolor="success.main" padding="10px" flexGrow={1}>
                    <h1>Home page</h1>
                </Box>
                <Box height="20vh" bgcolor="text.secondary">

                </Box>
            </Box>
        </div>
    );
}

export default Home;