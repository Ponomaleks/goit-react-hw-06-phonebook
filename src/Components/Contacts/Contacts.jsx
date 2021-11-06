import s from './Contacts.module.css';
import ButtonDelete from './ButtonDelete';
import { useSelector, useDispatch } from 'react-redux';
import { filterteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/actions';

export default function Contacts() {
  const contacts = useSelector(filterteredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li className={s.contact} key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <ButtonDelete
              type="button"
              text="Delete"
              id={contact.id}
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            ></ButtonDelete>
          </li>
        );
      })}
    </ul>
  );
}
