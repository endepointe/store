import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  GET_TOTAL
} from './actionTypes';

let nextCartItemId = 0;

export const addProduct = content => ({
  type: ADD_PRODUCT,
  payload: {
    id: ++nextCartItemId,
    content
  }
})

export const removeProduct = content => ({
  type: REMOVE_PRODUCT,
  payload: {
    id: content.id,
    content
  }
});

export const getCartTotal = content => ({
  type: GET_TOTAL,
  payload: {
    content
  }
})