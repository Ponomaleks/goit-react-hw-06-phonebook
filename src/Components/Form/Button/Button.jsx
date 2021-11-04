import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ type, text }) {
  return (
    <button className={s.submitBtn} type={type}>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
