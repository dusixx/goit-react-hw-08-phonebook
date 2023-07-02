import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const jwt = {
  set(str) {
    axios.defaults.headers.common.Authorization = `Bearer ${str}`;
  },
  clear() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

//
// thunks
//

export const signup = createAsyncThunk(
  'auth/signup',
  async (creds, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', creds);
      jwt.set(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (creds, thunkApi) => {
  try {
    const { data } = await axios.post('/users/login', creds);
    jwt.set(data.token);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const { data } = await axios.post('/users/logout');
    jwt.clear();
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('Unauthorized user');
  }

  try {
    jwt.set(token);
    const { data: user } = await axios('users/current');
    return { user, token };
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
