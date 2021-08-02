import { Button, Card, CardContent, Box, TextField, Typography } from "@material-ui/core";
import { useEffect } from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";


import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "store/auth/reducer";
import { userLoggedIn } from "store/auth/selector";


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
    const userIsLoggedIn = useSelector(userLoggedIn);
    
    if (userIsLoggedIn) {
        return <Redirect to="/" />
    }

    return (
        <Box minHeight="100vh" flexDirection="column" display="flex">
            <Navbar />

            <Box flexGrow={1} display="flex" justifyContent="space-around" alignItems="center">
                <Box minWidth="300px" maxWidth="400px">
                    <AmplifyAuthenticator>
                        <AmplifySignUp
                            slot="sign-up"
                        />
                    </AmplifyAuthenticator>
                </Box>
            </Box>
        </Box>
    );

}

export default Register;