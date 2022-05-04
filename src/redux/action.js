import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

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
