import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '~store/store';

interface ICasinoGame {
  id: number;
  name: string;
}

const initialState: Array<ICasinoGame> = [
  { id: 1, name: 'BlackJack' },
  { id: 2, name: 'Poker' },
  { id: 3, name: 'Roulette' },
];

export const casinoSlice = createSlice({
  name: 'casino-tables',
  initialState,
  reducers: {
    createGame: (state, action) => {
      state.push(action?.payload);
    },
    removeGame: (state, action) => {
      delete state[action?.payload];
    },
  },
});

export const { createGame, removeGame } = casinoSlice.actions;

export const selectCasinoTables = (state: RootState) => state.casinoTables;
export default casinoSlice.reducer;
