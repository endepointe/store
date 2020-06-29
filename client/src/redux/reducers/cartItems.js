import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  item: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { id, content } = action.payload;
      console.log(content, id)
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          }
        },
        item: [...state.allIds, id]
      };
    }
    case REMOVE_PRODUCT: {
      // remove the item from the state
      const { id, content } = action.payload;
      console.log(action);
      return {
        ...state,
        allIds: state.allIds.filter(id => id !== action.payload.id),
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          }
        },
        item: [...state.allIds, id]
      }
    }
    default:
      return state;
  }
}