import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice.js';
import waiversReducer from '../features/waiversSlice.js';
import yourstockReducer from '../features/yourStockSlice.js';
import leagueReducer from '../features/leagueSlice.js';

export default configureStore({
  reducer: {
    user: userReducer,
    waivers: waiversReducer,
    yourstock: yourstockReducer,
    league: leagueReducer
  }
});
