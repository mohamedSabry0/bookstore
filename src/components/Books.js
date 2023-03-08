import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

export default function Books() {
  const { items } = useSelector((store) => store.books);
  return (
    <>
      <div className="books-list">
        {items.map((item) => (
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
