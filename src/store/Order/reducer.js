import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getOrderData, getOrderId, getPaymentInfo } from "store/Order/selector"
import { logIn } from 'store/auth/reducer';
import orderApi from 'store/Order/api';


function getHash(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
};


export const submitOrder = createAsyncThunk(
    'order/submitOrder', async (_, { dispatch, getState }) => {
        const orderData = getOrderData(getState());
        const result = await orderApi.postOrder(orderData);
        console.log(result);
        return result

    }
)


export const fetchReceiptUrl = createAsyncThunk(
    'order/getReceiptUrl', async (_, { dispatch, getState }) => {
        const id = getOrderId(getState())
        let result;
        do {
            result = await orderApi.getOrder(id)
        } while(result == null || result.payment.receiptURL == null) 

         
        return result.payment.receiptURL;

    }
)





const initialState = {
    customerInfo: {
        firstname: "",
        surname: "",
        email: "",
        phone: ""
    },
    paymentInfo: {
        clientSecret: "",
        cardInfo: {
        }
    },
    delivery: {
        pickup: {
            time: "",
            option: "now"
        },
        merchantId: ""
    },
    items: {},
    tipMultiplier: 0.1,
    taxMultiplier: 0.1,
    receiptUrl: "",
    id: ""
}

export const orderReducer = createSlice({
    name: 'order',
    initialState,
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
            prepare: ({ item, quantity, addons, specialInstruction }) => {
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
            state.items[orderKey].quantity = parseInt(quantity);
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
        setClientSecret: (state, action) => {
            state.paymentInfo.clientSecret = action.payload;
        },

        setPickupTime: (state, action) => {

            state.delivery.pickup.time = action.payload;
        },

        setPickupTimeOption: (state, action) => {
            state.delivery.pickup.option = action.payload;
        },

        resetOrder: (state) => {
            state.customerInfo = initialState.customerInfo;
            state.items = initialState.items;
            state.delivery = initialState.delivery;
            state.paymentInfo = initialState.paymentInfo;
            state.id = initialState.id;
            state.taxMultiplier = initialState.taxMultiplier;
            state.tipMultiplier = initialState.tipMultiplier;
        }

    },
    extraReducers: (builder) => {


        builder.addCase(submitOrder.fulfilled, (state, action) => {
            state.id = action.payload.id;
        });

        builder.addCase(fetchReceiptUrl.fulfilled, (state, action) => {
            state.receiptUrl = action.payload;
        });

        builder.addCase(logIn().type, (state, action) => {
            const {email, phone_number} = action.payload.user.attributes;
            state.customerInfo.email = email;
            state.customerInfo.phone = phone_number;
        });
    }
})




// Action creators are generated for each case reducer function
export const { resetOrder, addOrder, changeQuantity, removeOrderItem, setTip, setCustomerInfo, setCardInfo, setClientSecret, setPickupTime, setPickupTimeOption } = orderReducer.actions

export default orderReducer.reducer


