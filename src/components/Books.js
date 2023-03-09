import { useSelector } from 'react-redux';
import { AllBooks } from '../redux/books/booksSlice';
import Book from './Book';
import BookForm from './BookForm';

export default function Books() {
  const Books = useSelector(AllBooks);

  return (
    <>
      <div className="books-list">
        {Books.map((item) => (
          <Book
            key={item.item_id}
            id={item.item_id}
            category={item.category}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
      <BookForm />
    </>
  );
}
