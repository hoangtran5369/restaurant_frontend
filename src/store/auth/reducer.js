import { createSlice } from '@reduxjs/toolkit'

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    authState: "signedout",
    username: null,
    phone: "",
    email: "",
    id: ""
  },
  reducers: {
    logIn: (state, action) => {
      const user = action.payload.user;
      
      state.username = user.username;
      state.phone = user.attributes.phone_number
      state.email = user.attributes.email
      state.id = user.attributes.sub
      state.authState = "signedin";
    },
    logOut: (state) => {
      state.username = null;
      state.phone = ""
      state.email = ""
      state.id = ""
      state.authState = "signedout";

    }

  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = authReducer.actions

export default authReducer.reducer