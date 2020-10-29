import { createSlice } from '@reduxjs/toolkit';

export const waiversSlice = createSlice({
  name: 'waivers',
  initialState: {
    waivers: []
  },
  reducers: {
    setWaivers: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.waivers = action.payload;
    }
  }
});

export const { setWaivers } = waiversSlice.actions;

export const selectWaivers = (state) => state.waivers.waivers;

export default waiversSlice.reducer;
