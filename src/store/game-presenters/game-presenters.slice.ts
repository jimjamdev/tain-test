import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '~store/store';

interface IGamePresenter {
  id: number;
  name: string;
}

const initialState: Array<IGamePresenter> = [
  { id: 1, name: 'Ian' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Joe' },
  { id: 4, name: 'Harry' },
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
