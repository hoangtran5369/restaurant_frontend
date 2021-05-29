import { Button, Card, CardContent, Divider, Grid, TextField, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { Box } from "@material-ui/core";
import {useForm} from "react-hook-form";
import {logIn} from "../store/auth/reducer";
import { useSelector, useDispatch } from 'react-redux'

function Login() {
    const dispatch = useDispatch()
    const history = useHistory();
    const { handleSubmit, register } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        dispatch(logIn({
            id: "1234",
            email: "asdf@asdf.com"
        }))
        history.push("/");
    });


    return (
        <div>
            <Navbar />
            <Box display="flex" minHeight="100vh" justifyContent="space-around" alignItems="center">
                <Box minWidth="300px" maxWidth="400px">

                <Card>
                    <CardContent>
                        <form onSubmit={onSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}> <Typography variant="h5" component="h2" gutterBottom>Sign in</Typography> </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField {...register('email')} fullWidth label="Email" name="email" size="small" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField {...register('password')} fullWidth label="Password" name="password" size="small" type="password" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2} xs={12}>
                                    <Grid item xs={6}>
                                        <a>Forgot password?</a>
                                    </Grid>
                                    <Grid item xs={6}>

                                    <Button color="primary" fullWidth type="submit" variant="contained">
                                        Log in
                                    </Button>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid item xs={12} container direction="row" justify="space-around" alignItems="center">
                                        <Grid item xs={8}> 
                                        <Box component="span" m={1}>
                                        New to Pho28?
                                        </Box>    
                                        <Link to="/register">
                                        Sign up
                                        </Link>
                                        </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
                </Box>
            </Box>
        </div>
    );
}

export default Login;