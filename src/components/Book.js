import PropTypes from 'prop-types';
import Button from './Button';

function Book({ title, author }) {
  return (
    <div className="book">
      <p>
        {title}
        {' '}
        - by
        {' '}
        <span>{author}</span>
      </p>
      <Button label="Remove" />
    </div>
  );
}

Book.propTypes = { title: PropTypes.string.isRequired, author: PropTypes.string.isRequired };

export default Book;
