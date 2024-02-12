import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    userid: '',
    image: '',
    isLoggedin: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.userid = action.payload.userid;
      state.image = action.payload.image;
      state.isLoggedin = action.payload.isLogedin;

    },
    clearUser: (state) => {
      state.email = '';
      state.userid = '';
      state.image = '';
      state.isLoggedin = false;

    }
  }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;