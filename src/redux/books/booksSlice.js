import { createSlice } from '@reduxjs/toolkit';

// const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HYYvKmGO3upxaXekhp4l/books';
// const delURL = (id) => `${URL}/id`;

// const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
//   try {
//     fetch(URL);
//   } catch (err) {

//   }
// });

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
});

export const AllBooks = (state) => state.books.books;
export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
