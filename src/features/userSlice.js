import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",

  initialState: {
      user:null,
  },

  reducers: {
      logIn:(state, action) =>{
        state.user = action.payload;
      },
      logOut : (state) => {
        state.user = null;
      },
  },
});

export const {logIn, logOut } = userSlice.actions;

export const selectUser = state => state.user.user;  // state.name(user).initialState(User)

export default userSlice.reducer;