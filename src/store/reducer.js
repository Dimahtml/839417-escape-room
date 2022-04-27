import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadDetailedQuest, removeDetailedQuest, changeGenre, setError } from './action';
import { QuestsGenres } from '../const';

const initialState = {
  quests: [],
  detailedQuest: null,
  genre: QuestsGenres.AllQuests,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(loadDetailedQuest, (state, action) => {
      state.detailedQuest = action.payload;
    })
    .addCase(removeDetailedQuest, (state) => {
      state.detailedQuest = null;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
});

export { reducer };
