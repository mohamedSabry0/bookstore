import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { booksState, fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';

export default function BooksList() {
  console.log('booklist is called');
  const dispatch = useDispatch();

  const { books, error, status } = useSelector(booksState);
  console.log(books);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
    console.log(status, 'i fire ');
  });

  // console.log(status, error);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'succeeded') {
    // console.log(status);
    return (
      <div className="books-list">
        {books.map((item) => (
          <Book
            key={item.item_id}
            id={item.item_id}
            category={item.category}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    );
  } if (status === 'failed') {
    return (<p>{ error }</p>);
  }
}
