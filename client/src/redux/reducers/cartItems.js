import {
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  total: parseFloat(0)
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { id, content } = action.payload;
      // console.log(typeof state.total);
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          }
        },
        total: state.total += parseFloat(content.price)
      };
    }
    case REMOVE_PRODUCT: {
      const { id, content } = action.payload;
      // console.log(state.total);
      return {
        ...state,
        allIds: state.allIds.filter(id => id !== action.payload.id),
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          }
        },
        total: state.total -= parseFloat(content.content.price)
      }
    }
    default:
      return state;
  }
}