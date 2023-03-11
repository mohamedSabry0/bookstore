import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

export default function BookForm() {
  const [inputs, setInputs] = useState({ title: '', author: '', category: '' });
  const dispatch = useDispatch();
  const addHandler = () => {
    const { title, author, category } = inputs;

    const Book = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(Book));
    setInputs({
      title: '',
      author: '',
      category: '',
    });
  };
  return (

    <Form>
      <h3>ADD NEW BOOK</h3>
      <label htmlFor="title">
        <input
          id="title"
          name="title"
          placeholder="Book title"
          value={inputs.title}
          onChange={(e) => {
            setInputs({ ...inputs, title: e.target.value });
          }}
        />
      </label>
      <label htmlFor="author">
        <input
          id="author"
          name="author"
          placeholder="Author"
          value={inputs.author}
          onChange={(e) => {
            setInputs({ ...inputs, author: e.target.value });
          }}
        />
      </label>

      <label htmlFor="category">
        <input
          id="category"
          name="category"
          placeholder="Category"
          value={inputs.category}
          onChange={(e) => {
            setInputs({ ...inputs, category: e.target.value });
          }}
        />
      </label>
      <button className="add-button" type="button" onClick={addHandler}>Add Book</button>
    </Form>
  );
}
