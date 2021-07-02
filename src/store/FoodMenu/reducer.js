import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import foodMenuApi from 'store/FoodMenu/api';


export const fetchCategories = createAsyncThunk(
  'foodmenu/fetchCategories',
  async () => {
    const categories = await foodMenuApi.fetchCategories();
    return categories;
  }
)

export const fetchFoodMenuItems = createAsyncThunk(
  'foodmenu/fetchFoodMenuItems',
  async () => {
    const items = await foodMenuApi.fetchFoodMenuItems();
    return items;
  }
)

export const foodMenuReducer = createSlice({
  name: 'foodmenu',
  initialState: {
    displayingItem: null,
    categoryIndex: -1,
    categories: [],

    items: []
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
    },

    setCategoryIndex: (state, action) => {
      const newIndex = action.payload
      if(Number.isInteger(newIndex) && newIndex < state.categories.length){
        state.categoryIndex = action.payload;
      }
    },

    clearCategoryIndex: (state) => {
      state.categoryIndex = -1;
    }

  },

  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    builder.addCase(fetchFoodMenuItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  }
})

// Action creators are generated for each case reducer function
export const { loadItems, displayItem, hideItem, setCategoryIndex, clearCategoryIndex } = foodMenuReducer.actions

export default foodMenuReducer.reducer