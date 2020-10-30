import { createSlice } from '@reduxjs/toolkit';

export const yourStockSlice = createSlice({
  name: 'yourstock',
  initialState: {
    yourstock: []
  },
  reducers: {
    setYourStock: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.yourstock = action.payload;
    }
  }
});

export const { setYourStock } = yourStockSlice.actions;

export const selectYourStock = (state) => state.yourstock.yourstock;

export default yourStockSlice.reducer;
