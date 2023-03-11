import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <div id={id} className="book">
      <div>
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>

        <div className="actions-area">
          <button type="button">Comments</button>

          <button
            type="button"
            className="remove"
            onClick={removeHandler}
          >
            Remove
          </button>

          <button type="button">Edit</button>
        </div>

      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
