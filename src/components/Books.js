import BookForm from './BookForm';
import BooksList from './BooksList';

export default function Books() {
  console.log('books called ');
  return (
    <>
      <BooksList />
      <BookForm />
    </>
  );
}
