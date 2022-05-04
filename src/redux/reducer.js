import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from 'redux/action';
import { findAndAddContact } from 'helpers/findAndAddContact';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items']
};

const itemReducer = createReducer([], {
  [addContact]: (state, { payload }) => findAndAddContact(state, payload),
  
  [deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

const constactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export const persistedContactsReducer = persistReducer(persistConfig, constactsReducer) 