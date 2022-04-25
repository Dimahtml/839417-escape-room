import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { redirectToRoute, loadQuests, loadDetailedQuest, sendOrder } from './action';
import { APIRoute, AppRoute } from '../const';

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

export const sendOrderAction = createAsyncThunk(
  'data/sendOrder',
  async ({name, phone, peopleCount, isLegal}, id) => {
    const {data} = await api.post(APIRoute.Order, {name, phone, peopleCount, isLegal});
    store.dispatch(sendOrder(data));
    store.dispatch(redirectToRoute(AppRoute.DetailedQuest.replace(':id', id)));
  },
);
