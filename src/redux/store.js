import { combineReducers, configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items']
};

export const addContact = createAction('phonebook/add', (name, number) => (
  {
    payload: {
      name,
      number,
      id: nanoid()
    }
  })
);
export const deleteContact = createAction('phonebook/delete')
export const changeFilter = createAction('filter')

const findAndAddContact = (state, payload) => {
  if (state.find(contact=> contact.name.includes(payload.name))) {
    window.alert(`${payload.name} уже есть в списке контактов`)
    return 
  } 

  return [...state, payload];
};

const itemReducer = createReducer([], {
  [addContact]: (state, { payload }) => findAndAddContact(state, payload),
  
  [deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
})

const constactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
}
)

const persistedContactsReducer = persistReducer(persistConfig, constactsReducer) 

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)

