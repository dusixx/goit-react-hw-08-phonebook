import { createSlice } from '@reduxjs/toolkit';
import * as thunk from './contactsThunks';

//
// handlers
//

export const fetchAllFulfilled = (state, { payload: newItems }) => {
  state.items = newItems;
};

export const addFulfilled = ({ items }, { payload: data }) => {
  items.push(data);
};

export const deleteFulfilled = (state, { payload: { id } }) => {
  state.items = state.items.filter(itm => itm.id !== id);
};

export const editFulfilled = (state, { payload: { id, name, number } }) => {
  state.items.some(itm => {
    if (itm.id === id) {
      itm.name = name;
      itm.number = number;
    }

    return itm.id === id;
  });
};

// common

export const fulfilled = state => {
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
// contactsSlice
//

const initialState = {
  items: [],
  pendingAction: null,
  editedId: null,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    setEditedId: (state, { payload: id }) => {
      state.editedId = id;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(thunk.fetchAll.fulfilled, fetchAllFulfilled)
      .addCase(thunk.addContact.fulfilled, addFulfilled)
      .addCase(thunk.deleteContact.fulfilled, deleteFulfilled)
      .addCase(thunk.editContact.fulfilled, editFulfilled)

      .addMatcher(({ type }) => type.endsWith('/fulfilled'), fulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), pending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;
