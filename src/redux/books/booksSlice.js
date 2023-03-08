import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook(state, action) {
      state.items.splice(action.payload);
    },
    AddBook(state, action) {
      state.items.push(action.payload);
    },
  },
});

export default booksSlice.reducer;
