import { createSlice } from '@reduxjs/toolkit';

export const leagueSlice = createSlice({
  name: 'league',
  initialState: {
    league: null,
    userLeagues: []
  },
  reducers: {
    setLeague: (state, action) => {
      let { league } = state;
      league = action.payload;
      return { ...state, league };
    },
    setUserLeagues: (state, action) => {
      let { userLeagues } = state;
      userLeagues = action.payload;
      return { ...state, userLeagues };
    }
  }
});

export const { setLeague, setUserLeagues } = leagueSlice.actions;

export const selectLeague = (state) => state.league.league;
export const selectUserLeagues = (state) => state.league.userLeagues;

export default leagueSlice.reducer;
