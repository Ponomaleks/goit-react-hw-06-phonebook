export const filterValue = state => state.filter;
export const filterteredContacts = ({ contacts, filter }) =>
  contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()));
