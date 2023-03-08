import PropTypes from 'prop-types';

function Button({ label, clickHandler }) {
  return (
    <button
      type="button"
      onClick={clickHandler}
    >
      {label}
    </button>
  );
}
Button.defaultProps = { clickHandler: () => {} };
Button.propTypes = { clickHandler: PropTypes.func, label: PropTypes.string.isRequired };

export default Button;
