import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

export default function BookForm() {
  const [inputs, setInputs] = useState({ title: '', author: '' });
  const dispatch = useDispatch();
  const addHandler = () => {
    const { title, author } = inputs;

    const Book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'fiction',
    };
    dispatch(addBook(Book));
    setInputs({
      title: '',
      author: '',
    });
  };
  return (

    <Form>
      <label htmlFor="title">
        {'Title: '}
        <input
          id="title"
          name="title"
          value={inputs.title}
          onChange={(e) => {
            setInputs({ ...inputs, title: e.target.value });
          }}
        />
      </label>
      <label htmlFor="author">
        {'Author: '}
        <input
          id="author"
          name="author"
          value={inputs.author}
          onChange={(e) => {
            setInputs({ ...inputs, author: e.target.value });
          }}
        />
      </label>
      <button type="button" onClick={addHandler}>Add Book</button>
    </Form>
  );
}
