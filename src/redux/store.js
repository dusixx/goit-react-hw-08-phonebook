import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer as contacts } from './contacts/contactsSlice';
import { filterReducer as filter } from './filter/filterSlice';
import { authReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const auth = persistReducer(
  {
    storage,
    key: 'token',
    whitelist: ['token'],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    auth,
    contacts,
    filter,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
