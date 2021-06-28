import { createSlice } from '@reduxjs/toolkit'

export const foodMenuReducer = createSlice({
  name: 'foodmenu',
  initialState: {
    displayingItem: null,

    items: [
      {
        id: "1",
        name: "Appetizer1",
        description: "Beef Noodle soup",
        price: 9.99,
        image: "https://i.imgur.com/yGeOUMB.jpg",
        category: "appetizer"
      },
      {
        id: "2",
        name: "Appetizer2",
        description: "Beef Noodle soup",
        price: 9.99,
        image: "https://i.imgur.com/yGeOUMB.jpg",
        category: "appetizer"
      },
      {
        id: "3",
        name: "Main1",
        description: "Beef Noodle soup",
        price: 9.99,
        image: "https://i.imgur.com/yGeOUMB.jpg",
        category: "main"
      },
      {
        id: "4",
        name: "Main2",
        description: "Beef Noodle soup",
        price: 9.99,
        image: "https://i.imgur.com/yGeOUMB.jpg",
        category: "main"
      },
      {
        id: "5",
        name: "Drink1",
        description: "Beef Noodle soup",
        price: 9.99,
        image: "https://i.imgur.com/yGeOUMB.jpg",
        category: "drink"
      },
    ]
  },
  reducers: {
    loadItems: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = action.payload;
    },

    displayItem: (state, action) => {
      state.displayingItem = action.payload;
    },

    hideItem: (state) => {
      state.displayingItem = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadItems, displayItem, hideItem } = foodMenuReducer.actions

export default foodMenuReducer.reducer