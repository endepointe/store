import {
  ADD_PRODUCT,
  GET_TOTAL,
  REMOVE_PRODUCT
} from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  total: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { id, content } = action.payload;
      // console.log(content, id)
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          }
        },
        total: state.total += content.price
      };
    }
    case REMOVE_PRODUCT: {
      const { id, content } = action.payload;
      // console.log(content.content.price);
      return {
        ...state,
        allIds: state.allIds.filter(id => id !== action.payload.id),
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          }
        },
        total: state.total -= content.content.price
      }
    }
    case GET_TOTAL: {
      // this does nothing
      // console.log('cart total: ' + state.total)
      // console.log([state])
      return {
        ...state
      }
    }
    default:
      return state;
  }
}