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
      return {
        ...state,
        items: [...state.items.filter((item) => item.item_id !== action.payload)],
      };
    },
    addBook(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
