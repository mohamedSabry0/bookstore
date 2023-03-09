import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import unique from '../../util/unique';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HYYvKmGO3upxaXekhp4l/books';
// const delURL = (id) => `${URL}/id`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  // console.log('fetchbooks is called');
  const response = await fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => err.message);

  // const list = unique(response, );

  return response;
});

// fetch(addUrl, {
//   method: 'POST',
//   headers: {
//   "Content-Type": "application/json",
// },
//   body: JSON.stringify(Book)
// })

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook(state, action) {
      return {
        ...state,
        books: [...state.books.filter((item) => item.item_id !== action.payload)],
      };
    },
    addBook(state, action) {
      state.books.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        // TODO: handle extra redundant render
        // console.log(action.payload)
        books: unique(action.payload, state.books),
        status: 'succeeded',
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        status: 'failed',
      }));
  },
});

export const booksState = (state) => state.books;
export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
