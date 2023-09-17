import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-slice';
import productsReducer from './products-slice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    products: productsReducer
  }
});
