import AppRoutes from './components/Routes';
import {useEffect} from 'react';
import { Provider, useDispatch } from 'react-redux';
import Amplify from 'aws-amplify';
import awsconfig from 'aws-exports';
import store from "./store";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { logIn, logOut } from "store/auth/reducer";

Amplify.configure(awsconfig);

function InnerApp() {
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
  return <AppRoutes />
}

function App() {

  return (

    <Provider store={store}>
      <InnerApp />
    </Provider>
  );
}

export default App;
