import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState = {
  error: '',
};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = errorProcess.actions;
