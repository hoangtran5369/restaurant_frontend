import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {getOrderData, getPaymentInfo} from "store/Order/selector"
import orderApi from 'store/Order/api';


function getHash(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; 
    }
    return hash;
  };

  export const processOrderPayment = createAsyncThunk(
      'order/processPayment', async (_ , {getState}) => {
          console.log("PROCESSSING PAYMENT")
          console.log(getPaymentInfo(getState()))
          return "123456"
      }
  )

  export const submitOrder = createAsyncThunk(
    'order/submitOrder', async ( _, {dispatch, getState}) => {
        console.log("ORDER SUBMITTED")
        const paymentToken = await dispatch(processOrderPayment()).then(result => result.payload)
        console.log("PAYMENT TOKEN", paymentToken)
        const orderData = getOrderData(getState())
        orderData.paymentToken = paymentToken
        orderApi.postOrder(orderData).then(result => console.log(result))

    }
  )
  

export const orderReducer = createSlice({
    name: 'order',
    initialState: {
        customerInfo: {
            firstname: "",
            surname: "",
            email: "",
            phone: ""
        },
        paymentInfo: {
            cardInfo: {
                cardNum: "",
                expiry: "",
                cvc: ""
            }
        },
        delivery: {
            pickup: {
                time: "",
                option: "now"
            }
        },
        items: {},
        tipMultiplier: 0.1,
        taxMultiplier: 0.1,
    },
    reducers: {
        addOrder: {
            reducer: (state, action) => {
                const { orderKey, itemId, quantity, addonIds, specialInstruction } = action.payload;
                if (orderKey in state.items) {
                    state.items[orderKey].quantity += quantity
                } else {
                    state.items[orderKey] = {
                        itemId, quantity, addonIds, specialInstruction
                    }
                }
            },
            prepare: ({item, quantity, addons, specialInstruction}) => {
                const orderKey = getHash([item.id, specialInstruction, ...(addons.concat().sort())].join());
                return {
                    payload: {
                        orderKey,
                        itemId: item.id,
                        addonIds: addons,
                        quantity,
                        specialInstruction
                    }
                }
            }
        },

        changeQuantity: (state, action) => {
            const { orderKey, quantity } = action.payload;
            state.items[orderKey].quantity = quantity;
        },

        removeOrderItem: (state, action) => {
            const { orderKey } = action.payload;
            delete state.items[orderKey];
        },
        setTip: (state, action) => {
            state.tipMultiplier = action.payload;
        },

        setCustomerInfo: (state, action) => {
            state.customerInfo = action.payload;
        },

        setCardInfo: (state, action) => {
            state.paymentInfo.cardInfo = action.payload;
        },

        setPickupTime: (state, action) => {
            state.delivery.pickup.time = action.payload;
        },

        setPickupTimeOption: (state, action) => {
            state.delivery.pickup.option = action.payload;
        }
    },
})



// Action creators are generated for each case reducer function
export const { addOrder, changeQuantity, removeOrderItem, setTip, setCustomerInfo, setCardInfo, setPickupTime, setPickupTimeOption } = orderReducer.actions

export default orderReducer.reducer


