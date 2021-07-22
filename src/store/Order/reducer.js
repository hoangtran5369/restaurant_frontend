import { createSlice } from '@reduxjs/toolkit'


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
  

export const orderReducer = createSlice({
    name: 'order',
    initialState: {
        items: {},
        tipMultiplier: 0.1,
        taxMultiplier: 0.1,
    },
    reducers: {
        addOrder: {
            reducer: (state, action) => {
                const { orderKey, itemId, quantity, addonIds } = action.payload;
                if (orderKey in state.items) {
                    state.items[orderKey].quantity += quantity
                } else {
                    state.items[orderKey] = {
                        itemId, quantity, addonIds
                    }
                }
            },
            prepare: ({item, quantity, addons}) => {
                const orderKey = getHash([item.id, ...(addons.concat().sort())].join());
                return {
                    payload: {
                        orderKey: orderKey,
                        itemId: item.id,
                        addonIds: addons,
                        quantity: quantity,
                    }
                }
            }
        },

        changeQuantity: (state, action) => {
            const { orderKey, quantity } = action.payload;
            state.items[orderKey] = quantity;
        },

        removeOrderItem: (state, action) => {
            const { orderKey } = action.payload;
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


