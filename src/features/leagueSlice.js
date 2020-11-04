import { createSlice } from '@reduxjs/toolkit';

export const leagueSlice = createSlice({
  name: 'league',
  initialState: {
    league: null
  },
  reducers: {
    setLeague: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.league = action.payload;
    }
  }
});

export const { setLeague } = leagueSlice.actions;

export const selectLeague = (state) => state.league.league;

export default leagueSlice.reducer;
