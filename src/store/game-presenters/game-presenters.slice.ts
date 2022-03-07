import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '~store/store';
import { IGamePresenter } from '~types/casino';

const initialState: Array<IGamePresenter> = [
  { name: 'Ian' },
  { name: 'Bob' },
  { name: 'Joe' },
  { name: 'Mary' },
];

export const presenterSlice = createSlice({
  name: 'casino-presenter',
  initialState,
  reducers: {
    createPresenter: (state, action) => {
      state.push(action?.payload);
    },
    removePresenter: (state, action) => {
      delete state[action?.payload];
    },
  },
});

export const { createPresenter, removePresenter } = presenterSlice.actions;

export const selectPresenters = (state: RootState) => state.gamePresenters;
export default presenterSlice.reducer;
