import { ADD_PRODUCT } from './actionTypes';

let nextCartItemId = 0;

export const addProduct = content => ({
  type: ADD_PRODUCT,
  payload: {
    id: ++nextCartItemId,
    content
  }
})