import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/action';
import { getContacts, getFilter } from 'redux/selectors';
import s from 'components/ContactsBook/ContactsBook.module.css'

export default function ContactsBook() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => { 
    if (contacts.length === 0) {
      return
    }
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <>
      {!getVisibleContacts() && <p>Добавьте контакт</p>}
      {getVisibleContacts() &&
       <ul className={s.list}>
        {getVisibleContacts().map(contact => {
        const {name, number, id} = contact;

        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              type='button'
              onClick={() => dispatch(deleteContact(id))}
              className={s.button}
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>}
    </>
  )
}