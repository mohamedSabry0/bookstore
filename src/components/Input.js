import PropTypes from 'prop-types';
import capitalize from '../util/capitalize';

function Input({ name }) {
  return (
    <>
      <label htmlFor={name}>{`${capitalize(name)}: `}</label>
      <input type="text" name={name} />
    </>
  );
}

Input.propTypes = { name: PropTypes.string.isRequired };

export default Input;
