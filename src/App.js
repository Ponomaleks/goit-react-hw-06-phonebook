import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import './App.css';

import Form from './Components/Form';
import SectionH1 from './Components/SectionH1';
import Contacts from './Components/Contacts';
import SectionH2 from './Components/SectionH2';
import Filter from './Components/Filter/Filter';

const exampleContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('contacts')) ?? exampleContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidMount() {
  //   this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) ?? exampleContacts });
  // }

  // componentDidUpdate() {
  //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }

  const addContact = ({ name, number }) => {
    const newContact = { name: name, number: number, id: uuidv4() };

    if (!contacts.map(contact => contact.name.toLowerCase()).includes(name.toLowerCase())) {
      setContacts(prevState => [...prevState, newContact]);
    } else alert(`${name} is already in contacts.`);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterHundler = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <>
      <SectionH1 title="Phonebook">
        <Form onSubmit={addContact}></Form>
      </SectionH1>
      <SectionH2 title="Contacts">
        <Filter value={filter} onChange={filterHundler} />
        <Contacts contactsList={filteredContacts} onDeleteContact={deleteContact}></Contacts>
      </SectionH2>
    </>
  );
}
