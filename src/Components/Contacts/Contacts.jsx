import PropTypes from 'prop-types';

import s from './Contacts.module.css';

import ButtonDelete from './ButtonDelete';

export default function Contacts({ contactsList, onDeleteContact }) {
  return (
    <ul>
      {contactsList.map(contact => {
        return (
          <li className={s.contact} key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <ButtonDelete
              type="button"
              text="Delete"
              id={contact.id}
              onClick={onDeleteContact}
            ></ButtonDelete>
          </li>
        );
      })}
    </ul>
  );
}

ButtonDelete.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
