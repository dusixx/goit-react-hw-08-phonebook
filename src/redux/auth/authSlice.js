import { createSlice } from '@reduxjs/toolkit';
import * as thunk from './authThunks';

const initialState = {
  user: { name: null, email: null },
  token: null,
  pendingAction: null,
  error: null,
};

//
// handlers
//

export const logoutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
};

export const authFulfilled = (state, { payload }) => {
  state.user = payload?.user;
  state.token = payload?.token;
  state.pendingAction = state.error = null;
};

export const pending = (state, action) => {
  state.pendingAction = action.type.replace(/\/pending/i, '');
};

export const rejected = (state, { payload: error }) => {
  state.pendingAction = null;
  state.error = error;
};

//
// authSlice
//

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(thunk.logout.fulfilled, logoutFulfilled)

      .addMatcher(
        // !! сюда заходят все типы экшенов в т.ч. для контактов
        // Отбираем только auth/../..
        ({ type }) => type.startsWith('auth/') && type.endsWith('/fulfilled'),
        authFulfilled
      )
      .addMatcher(({ type }) => type.endsWith('/pending'), pending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), rejected);
  },
});

export const authReducer = authSlice.reducer;
