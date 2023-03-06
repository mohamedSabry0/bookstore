import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus(state, action) {
      // stick to the toolkit way, as it uses the immer library to map mutating to proper react way
      state.items = action.payload === 'Under construction' // eslint-disable-line no-param-reassign
        ? 'Under construction'
        : state.items;
    },
  },
});

export default categoriesSlice.reducer;
