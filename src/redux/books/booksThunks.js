import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HYYvKmGO3upxaXekhp4l/books';
const delURL = (id) => `${URL}/${id}`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => err.message);
  return response;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res;
    })
    .catch((err) => err.message);
  if (response.statusText !== 'Created') {
    return 'failed';
  }
  return book;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await fetch(delURL(id), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res;
    })
    .catch((err) => err.message);
  if (response.statusText !== 'Created') {
    return 'failed';
  }
  return id;
});
