import { configureStore , combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import  authReducer  from 'store/auth/reducer';
import orderReducer from 'store/Order/reducer';
import foodMenuReducer from 'store/FoodMenu/reducer';

const persistConfig = {
  key: "root",
  storage
};

const baseReducer = combineReducers({
  auth: authReducer,
  order: orderReducer,
  foodMenu: foodMenuReducer
});

const persistedRedcer =  persistReducer(persistConfig, baseReducer);

export default configureStore({
  reducer: persistedRedcer
})