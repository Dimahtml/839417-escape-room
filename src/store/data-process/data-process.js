import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, QuestsGenres } from '../../const';

const initialState = {
  quests: [],
  detailedQuest: null,
  genre: QuestsGenres.AllQuests,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadQuests: (state, action) => {
      state.quests = action.payload;
    },
    loadDetailedQuest: (state, action) => {
      state.detailedQuest = action.payload;
    },
    removeDetailedQuest: (state) => {
      state.detailedQuest = null;
    },
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const {
  loadQuests,
  loadDetailedQuest,
  removeDetailedQuest,
  changeGenre
} = dataProcess.actions;
