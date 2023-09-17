import mockProducts from '../mockData/mockProducts';

import { setProducts, startLoadingProducts } from './products-slice';

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(startLoadingProducts());

    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 5000);
    });

    dispatch(setProducts(data));
  };
};
