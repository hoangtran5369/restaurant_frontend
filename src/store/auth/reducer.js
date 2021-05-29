import { createSlice } from '@reduxjs/toolkit'

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: {id: "", email: ""}
  },
  reducers: {
    logIn: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = {id: "", email: ""};
    }

  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = authReducer.actions

export default authReducer.reducer