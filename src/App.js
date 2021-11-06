import './App.css';

import Form from './Components/Form';
import SectionH1 from './Components/SectionH1';
import Contacts from './Components/Contacts';
import SectionH2 from './Components/SectionH2';
import Filter from './Components/Filter/Filter';

export default function App() {
  return (
    <>
      <SectionH1 title="Phonebook">
        <Form></Form>
      </SectionH1>
      <SectionH2 title="Contacts">
        <Filter />
        <Contacts></Contacts>
      </SectionH2>
    </>
  );
}
