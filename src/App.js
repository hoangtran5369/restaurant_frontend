import AppRoutes from './components/Routes';
import {useEffect} from 'react';
import { Provider, useDispatch } from 'react-redux';
import Amplify from 'aws-amplify';
import awsconfig from 'aws-exports';
import store from "./store";
import AuthProvider from "components/AuthProvider";

Amplify.configure(awsconfig);

function App() {

  return (

    <Provider store={store}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Provider>
  );
}

export default App;
