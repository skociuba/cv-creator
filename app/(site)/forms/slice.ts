// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {createSlice, PayloadAction, current} from '@reduxjs/toolkit';

import {FormState} from '../../../types/form';

const initialState: FormState = {
  firstName: '',
  lastName: '',
  jobTitle: '',
  nationality: '',
  about: '',
  city: '',
  email: '',
  phone: '',
  workHistory: [],
  educationHistory: [],
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
    addItem: (state, action: PayloadAction<WorkHistoryItem>) => {
      state[action.payload.typeData].push(action.payload.payloadData);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state[action.payload.typeData].splice(action.payload.index, 1);
    },
  },
});

export const {updateField, addItem, removeItem} = formSlice.actions;

export default formSlice.reducer;
