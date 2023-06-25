import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { participantesApi } from '../services/participantesApi';
import { testReducer } from '../features/counter/testReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    test: testReducer,
    [participantesApi.reducerPath]: participantesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    participantesApi.middleware,
  )
})