import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus(state) {
      // although the immer library is available there is a linter rule for param-reassignment
      return {
        ...state,
        items: 'Under construction',
      };
    },
  },
});

export default categoriesSlice.reducer;
