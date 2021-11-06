import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';
import Button from './Button';
import InputName from './InputName';
import InputTel from './InputTel';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number, id: uuidv4() }));
    // onSubmit({ name: name, number: number });
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
