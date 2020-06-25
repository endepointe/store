import { ADD_PRODUCT } from './actionTypes';

let nextProductId = 0;

export const addProduct = content => ({
  type: ADD_PRODUCT,
  payload: ++nextProductId,
  content
});