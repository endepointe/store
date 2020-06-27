export const getCartItemsState = store => store.cartItems;

export const getCartItemList = store =>
  getCartItemsState(store) ? getCartItemsState(store).allIds : [];

export const getCartItemById = (store, id) =>
  getCartItemsState(store) ? { ...getCartItemsState(store).byIds[id], id } : {};

export const getCartItems = store =>
  getCartItemList(store).map(id => getCartItemById(store, id));