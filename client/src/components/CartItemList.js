import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { getCartItems } from '../redux/selectors';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    height: '70vh',
    margin: '2rem auto 0 auto',
    backgroundColor: '#FFF',
    borderRadius: '0.2rem',
    padding: 0,
    overflowY: 'hidden',
  },
  cartDesc: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    flex: 1,
    marginLeft: '2rem',
  },
  itemPrice: {
    flex: 1,
    textAlign: 'right',
    marginRight: '2rem',
  },
  cart: {
    flex: 30022,
    padding: 0,
  },
  cartButtons: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'flex-end',
  },
  continueButton: {
    borderRadius: 0,
    backgroundColor: 'rgb(255, 230, 0)',
    color: 'black',
    '&:hover': {
      backgroundColor: 'rgb(255, 255, 0)',
    },
  },
  checkoutButton: {
    borderRadius: 0,
    backgroundColor: 'var(--cartbutton-color)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'var(--other-color)',
    }
  },
  emptyCart: {
    width: '100%',
    height: '100%',
    margin: '30% auto 0 auto',
    textAlign: 'center',
  }
});

const CartItemList = ({ cartItems }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cartDesc}>
        <h3 className={classes.itemTitle}>Item</h3>
        <h3 className={classes.itemPrice}>Price</h3>
      </div>
      <ul className={classes.cart}>
        {cartItems && cartItems.length
          ? cartItems.map((item, index) => {
            return <CartItem key={item.id} item={item} />
          })
          : <div className={classes.emptyCart}>Your cart is empty.</div>}
      </ul>
      <div className={classes.cartButtons}>
        <Button className={classes.checkoutButton}>Checkout</Button>
        <Button className={classes.continueButton}>Continue Shopping</Button>
      </div>
    </div>
  );
}

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