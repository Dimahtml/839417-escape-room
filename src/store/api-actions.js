import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { loadQuests, loadDetailedQuest } from './action';
import { APIRoute } from '../const';

export const fetchQuestsAction = createAsyncThunk(
  'data/fetchQuests',
  async () => {
    const {data} = await api.get(APIRoute.Quests);
    store.dispatch(loadQuests(data));
  },
);

export const fetchDetailedQuestAction = createAsyncThunk(
  'data/fetchDetailedQuest',
  async (id) => {
    const {data} = await api.get(APIRoute.DetailedQuest.replace(':id', id));
    store.dispatch(loadDetailedQuest(data));
  },
);
