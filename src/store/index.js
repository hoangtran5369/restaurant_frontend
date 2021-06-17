import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from 'store/auth/reducer'
import orderReducer from 'store/Order/reducer'
import foodMenuReducer from 'store/FoodMenu/reducer'

export default configureStore({
  reducer: {
      auth: authReducer,
      order: orderReducer,
      foodMenu: foodMenuReducer
  },
})