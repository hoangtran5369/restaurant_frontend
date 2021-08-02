import { Button, Card, CardContent, TextField, Typography, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import {useForm} from "react-hook-form";
import {logIn} from "../store/auth/reducer";
import { useDispatch } from 'react-redux'
import styled from "styled-components";
import { AmplifySignIn} from "@aws-amplify/ui-react"

const InputField = styled(TextField)`
    margin: 0.5rem 0;
`
const ForgotPassLink = styled.a`
    padding: 10px;
    display: block;
    flex-basis: 50%;
`

const LoginButton = styled(Button)`
    padding: 10px;
    flex-basis: 50%;
`

const SignupPrompt = styled.p`
    text-align: center;
    margin: 0.5rem 0;
`

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
        <Box minHeight="100vh" flexDirection="column" display="flex">
            <Navbar />
            <Box flexGrow={1} display="flex" justifyContent="space-around" alignItems="center">
                <Box minWidth="300px" maxWidth="400px">
                <Card>
                    <CardContent>
                            <AmplifySignIn />
                    </CardContent>
                </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;