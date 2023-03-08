import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
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
};

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
