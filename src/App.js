import logo from './logo.svg';
import './App.css';
import AppRoutes from './components/Routes';

import { Provider } from 'react-redux';

import store from "./store";

function App() {
  return (
    <Provider store={store}>

      <AppRoutes />
    </Provider>
  );
}

export default App;
