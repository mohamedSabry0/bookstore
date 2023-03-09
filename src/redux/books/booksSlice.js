import { createSlice } from '@reduxjs/toolkit';
import unique from '../../util/unique';
import { fetchBooks } from './booksThunks';

const initialState = {
  books: [],
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
        // TODO: handle (should be redundant) render
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
export { fetchBooks };
export const booksState = (state) => state.books;
export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
