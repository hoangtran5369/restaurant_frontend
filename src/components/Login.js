import { Button, FormControl, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>Login page</h1>

            <form>
                <FormControl variant="filled">

                <TextField label="email" />
                <TextField label="password"/>
                <Button> Submit </Button>
                </FormControl>
            </form>
            <Link to="/">Back to home</Link>
        </div>
    );
  }

export default Login;