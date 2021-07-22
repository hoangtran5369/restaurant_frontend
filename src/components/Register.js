import { Button, Card, CardContent, Box, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {useForm} from "react-hook-form";

import styled from "styled-components";


const InputField = styled(TextField)`
    margin: 0.5rem 0;
`

const LoginButton = styled(Button)`
    padding: 10px;
    flex-basis: 50%;
`

const SignupPrompt = styled.p`
    text-align: center;
    margin: 0.5rem 0;
`
function Register() {
    const { handleSubmit, register } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });

    return (
        <Box minHeight="100vh" flexDirection="column" display="flex">
            <Navbar />
            <Box flexGrow={1} display="flex" justifyContent="space-around" alignItems="center">
                <Box minWidth="300px" maxWidth="400px">
                <Card>
                    <CardContent>
                        <form onSubmit={onSubmit}>
                            <Typography variant="h5" component="h2" gutterBottom>Register</Typography>
                            <InputField {...register('email')} fullWidth label="Email" name="email" size="small" variant="outlined" />
                            <InputField {...register('password')} fullWidth label="Password" name="password" size="small" type="password" variant="outlined" />
                            <InputField {...register('password')} fullWidth label="Confirm Password" name="confirm" size="small" type="password" variant="outlined" />
                            <Box display="flex" flexDirection="row-reverse">
                                <LoginButton color="primary" fullWidth type="submit" variant="contained">Register</LoginButton>
                            </Box>

                            <SignupPrompt>Already have an account? <Link to="/register">Log in</Link></SignupPrompt>
                        </form>
                    </CardContent>
                </Card>
                </Box>
            </Box>
        </Box>
    );

}

export default Register;