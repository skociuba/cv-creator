import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import formSlice from '../../app/forms/slice';

import {FormApi} from './form/form';
export const store = configureStore({
  reducer: {
    [FormApi.reducerPath]: FormApi.reducer,
    form: formSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(FormApi.middleware),
});

setupListeners(store.dispatch);
