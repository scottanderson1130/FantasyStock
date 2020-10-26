import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    logIn: false
  },
  reducers: {
    setUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
    setLogIn: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.logIn = action.payload;
    }
  }
});

export const { setUser, setLogIn } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectLogIn = (state) => state.user.logIn;

export default userSlice.reducer;
