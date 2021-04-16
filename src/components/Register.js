import { Button, Card, CardContent, Divider, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Box } from "@material-ui/core";

function Register() {
    return (
        <div>
            <Navbar />
            <Box display="flex" minHeight="100vh" justifyContent="space-around" alignItems="center">
                <Box minWidth="300px" maxWidth="400px">

                    <Card>
                        <CardContent>
                            <form>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}> <Typography variant="h5" component="h2" gutterBottom>Register</Typography> </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Email" name="email" size="small" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Password" name="password" size="small" type="password" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Confirm Password" name="confirm" size="small" type="password" variant="outlined" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item container spacing={2} xs={12} direction="row" justify="flex-end">

                                        <Grid item xs={6}>

                                            <Button color="primary" fullWidth type="submit" variant="contained">
                                                Register
                                    </Button>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                    <Grid item xs={12} container direction="row" justify="space-around" alignItems="center">
                                        <Grid item xs={8} spacing={2}> 
                                        <span>
                                        Already have an account?
                                        </span>    
                                        <Link to="/login">
                                        Log in
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

export default Register;