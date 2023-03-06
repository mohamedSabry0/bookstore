import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: [] };

const categoriesSlice = createSlice({
  name: 'categories',
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

export default categoriesSlice.reducer;
