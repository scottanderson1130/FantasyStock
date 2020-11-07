import { createSlice } from '@reduxjs/toolkit';

export const leagueSlice = createSlice({
  name: 'league',
  initialState: {
    league: null,
    leagueOwner: null,
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
    },
    setLeagueOwner: (state, action) => {
      let { leagueOwner } = state;
      leagueOwner = action.payload;
      return { ...state, leagueOwner };
    }
  }
});

export const { setLeague, setUserLeagues, setLeagueOwner } = leagueSlice.actions;

export const selectLeague = (state) => state.league.league;
export const selectUserLeagues = (state) => state.league.userLeagues;
export const selectLeagueOwner = (state) => state.league.leagueOwner;

export default leagueSlice.reducer;
