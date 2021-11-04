import { useState } from 'react';
import s from './Form.module.css';

import Button from './Button';
import InputName from './InputName';
import InputTel from './InputTel';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name: name, number: number });
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={s.form} name="addContact" onSubmit={handleSubmit}>
      <InputName value={name} onChange={handleChange} name="name"></InputName>
      <InputTel value={number} onChange={handleChange} name="number" />
      <Button type="submit" text="Add contact"></Button>
    </form>
  );
}
