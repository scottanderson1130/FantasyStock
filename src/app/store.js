import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice.js';
import waiversReducer from '../features/waiversSlice.js';
import yourstockReducer from '../features/yourStockSlice.js';

export default configureStore({
  reducer: {
    user: userReducer,
    waivers: waiversReducer,
    yourstock: yourstockReducer
  }
});
