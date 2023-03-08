import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/books/booksSlice';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <div id={id} className="book">
      <p>
        {title}
        {' '}
        - by
        {' '}
        <span>{author}</span>
      </p>
      <Button
        label="Remove"
        clickHandler={removeHandler}
      />
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
