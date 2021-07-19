import { SettingsPhone } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit'

export const orderReducer = createSlice({
    name: 'order',
    initialState: {
        items: {},
        tipMultiplier: 0,
        taxMultiplier: 0.1,        
    },
    reducers: {
        addOrder: (state, action) => {
            const { item, quantity, addons } = action.payload;
            const orderKey = [item.id, ...(addons.concat().sort())].join("---");
            if (orderKey in state.items) {
                state.items[orderKey] += quantity
            } else {
                state.items[orderKey] = quantity
            }
        },

        changeQuantity: (state, action) => {
            const {orderKey, quantity} = action.payload;
            state.items[orderKey] = quantity;
        },

        removeOrderItem: (state, action) => {
            const {orderKey} = action.payload;
            delete state.items[orderKey];
        },
        setTip: (state, action) => {
            state.tipMultiplier = action.payload;

        }
    },
})



// Action creators are generated for each case reducer function
export const { addOrder, changeQuantity, removeOrderItem, setTip } = orderReducer.actions

export default orderReducer.reducer


