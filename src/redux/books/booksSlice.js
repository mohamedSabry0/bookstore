import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: [] };

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook(state, action) {
      state.value.splice(action.payload);
    },
    AddBook(state, action) {
      state.value.push(action.payload);
    },
  },
});

export default booksSlice.reducer;
