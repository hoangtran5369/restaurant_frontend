import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import React, {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { logIn, logOut } from "store/auth/reducer";

function AuthProvider(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
        if (nextAuthState === AuthState.SignedIn) {
          dispatch(logIn({ user: authData.username }))
        } else if (nextAuthState === AuthState.SignedOut) {
          dispatch(logOut())
        }
      });
    }, []);
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
  }

  export default AuthProvider;