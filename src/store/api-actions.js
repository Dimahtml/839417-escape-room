import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { redirectToRoute, loadQuests, loadDetailedQuest, sendOrder, setError } from './action';
import { handleError } from '../services/handle-error';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';

export const fetchQuestsAction = createAsyncThunk(
  'data/fetchQuests',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Quests);
      store.dispatch(loadQuests(data));
    } catch(error) {
      handleError(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchDetailedQuestAction = createAsyncThunk(
  'data/fetchDetailedQuest',
  async (id) => {
    try {
      const {data} = await api.get(APIRoute.DetailedQuest.replace(':id', id));
      store.dispatch(loadDetailedQuest(data));
    } catch(error) {
      handleError(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const sendOrderAction = createAsyncThunk(
  'data/sendOrder',
  async ({name, phone, peopleCount, isLegal}) => {
    try {
      const {data} = await api.post(APIRoute.Order, {name, phone, peopleCount, isLegal});
      store.dispatch(sendOrder(data));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch(error) {
      handleError(error);
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const setErrorAction = createAsyncThunk(
  'app/setError',
  (message) => {
    store.dispatch(setError(message));
  },
);
