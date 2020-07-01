import {
  ADD_PRODUCT,
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
    default:
      return state;
  }
}