import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  products: []
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setProducts: (state, action) => {
      console.log('action', action);
      state.isLoading = false;
      state.products = action.payload;
    }
  }
});

export const { startLoadingProducts, setProducts } = productsSlice.actions;

//productsReducer
export default productsSlice.reducer;
