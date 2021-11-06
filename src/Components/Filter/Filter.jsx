import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/actions';
import { filterValue } from '../../redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(filterValue);

  return (
    <label>
      Find contacts by name
      <input
        name="filter"
        type="text"
        onChange={e => {
          dispatch(filterContacts(e.target.value));
        }}
        value={filter}
      />
    </label>
  );
}
