import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import React, {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { logIn, logOut } from "store/auth/reducer";
import {Auth} from "aws-amplify";

function AuthProvider(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      Auth.currentAuthenticatedUser().then(user => dispatch(logIn({user})));

      return onAuthUIStateChange((nextAuthState, authData) => {
        if (nextAuthState === AuthState.SignedIn) {
          dispatch(logIn({ user: authData }))
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