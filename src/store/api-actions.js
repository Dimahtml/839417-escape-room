import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { loadQuests } from './action';
import { APIRoute } from '../const';

export const fetchQuestsAction = createAsyncThunk(
  'data/fetchQuests',
  async () => {
    const {data} = await api.get(APIRoute.Quests);
    store.dispatch(loadQuests(data));
  },
);
