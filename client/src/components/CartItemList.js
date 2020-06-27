import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { getCartItems } from '../redux/selectors';

const CartItemList = ({ cartItems }) => (
  <div>
    <ul>
      {cartItems && cartItems.length
        ? cartItems.map((item, index) => {
          console.log(item.content.name)
          return <CartItem key={item.id} item={item} />
        })
        : "No cart items"}
    </ul>
    <button>Continue shopping</buttn>
    <button>Checkout</button>
  </div>
)

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.cartItems || {};
//   const cartItems =
//     allIds && allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { cartItems };
// }
// https://react-redux.js.org/introduction/basic-tutorial#common-ways-of-calling-connect
// export default connect(mapStateToProps)(CartItemList);

export default connect(
  state => ({ cartItems: getCartItems(state) }))(CartItemList);