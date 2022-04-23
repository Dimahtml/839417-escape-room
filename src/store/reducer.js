import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, changeGenre } from './action';
import { QuestsGenres } from '../const';

const initialState = {
  quests: [],
  genre: QuestsGenres.AllQuests,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
});

export { reducer };
