import Book from './Book';
import BookForm from './BookForm';

export default function Books() {
  return (
    <>
      <div className="books-list">
        <Book title="surfing the skies" author="Ibn Fernas" />
        <Book title="traveling the world" author="Ibn Batota" />
      </div>
      <BookForm />
    </>
  );
}
