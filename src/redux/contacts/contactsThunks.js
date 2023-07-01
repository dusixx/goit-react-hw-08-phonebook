import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (arg, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (creds, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', creds);
      return data;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/edit',
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await axios.patch(`/contacts/${id}`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
