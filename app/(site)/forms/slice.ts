// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {createSlice, PayloadAction, current} from '@reduxjs/toolkit';

import {FormState} from '../../../types/form';

const initialState: FormState = {
  firstName: '',
  lastName: '',
  age: null,
  nationality: '',
  about: '',
  sex: null,
  agree: null,
  workHistory: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{field: keyof FormState; value: string}>,
    ) => {
      state[action.payload.field] = action.payload.value;
      console.log(current(state));
    },
    addWorkHistoryItem: (state, action: PayloadAction<WorkHistoryItem>) => {
      state.workHistory.push(action.payload);
    },
    removeWorkHistoryItem: (state, action: PayloadAction<number>) => {
      state.workHistory.splice(action.payload, 1);
    },
  },
});

export const {updateField, addWorkHistoryItem, removeWorkHistoryItem} =
  formSlice.actions;

export default formSlice.reducer;
