import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  item: ''
};

export default funcion(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { id, content } = action.payload;
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

    }
    default:
      return state;
  }
}