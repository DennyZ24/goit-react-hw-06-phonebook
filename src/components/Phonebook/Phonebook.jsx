import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addContact} from 'redux/action'
import s from "components/Phonebook/Phonebook.module.css";

const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addContact(name, number));

    reset();
  };

  const handleChange = ({currentTarget: {name, value}}) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default: return;
    }
 }

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.label}>
        Name

        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      
      <label>
        Number

        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>

      <button type='submit' className={s.button}>
        Add contact
      </button>
    </form>
  )
}

export default Phonebook;