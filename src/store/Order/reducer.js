import { createSlice } from '@reduxjs/toolkit'

export const orderReducer = createSlice({
    name: 'order',
    initialState: {
        items: {}
    },
    reducers: {
        addOrder: (state, action) => {
            const {item, quantity} = action.payload;
            if (item.id in  state.items) {
                state.items[item.id].quantity += parseInt(quantity);
            } else {
                state.items[item.id] = {
                    name: item.name,
                    price: item.price,
                    quantity: parseInt(quantity)
                };
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addOrder } = orderReducer.actions

export default orderReducer.reducer