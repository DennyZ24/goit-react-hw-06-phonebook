import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/store';
import s from 'components/ContactsBook/ContactsBook.module.css'

export default function ContactsBook() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

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