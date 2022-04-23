import { createReducer } from '@reduxjs/toolkit';
import { loadQuests } from './action';

const initialState = {
  quests: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    });
});

export { reducer };
