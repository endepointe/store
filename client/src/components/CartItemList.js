import React,
{
  useState, useEffect
} from 'react';
import { makeStyles } from '@material-ui/styles';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { getCartItems, getTotal } from '../redux/selectors';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
    overflowY: 'auto',
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
  },
  cartTotal: {
    textAlign: 'right',
    marginRight: '2rem',
  }
});

const CartItemList = ({ cartTotal, cartItems }) => {

  const classes = useStyles();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(parseFloat(cartTotal));
    // let t = parseFloat(0);
    // for (let i = 0; i < cartItems.length; ++i) {
    //   t += cartItems[i].content.price;
    // }
    // setTotal(t);
  }, [cartTotal, cartItems]);

  const updateTotal = () => {
    setTotal(cartTotal);
  }

  const checkOut = () => {
    axios.post('/api/create-payment-intent', {
      total: cartTotal,
      items: cartItems,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <div className={classes.root}>
      <div className={classes.cartDesc}>
        <h3 className={classes.itemTitle}>Item</h3>
        <h3 className={classes.itemPrice}>Price</h3>
      </div>
      <ul className={classes.cart}>
        {cartItems && cartItems.length
          ? cartItems.map((item, index) => {
            return <CartItem
              updateTotal={updateTotal}
              key={item.id}
              item={item} />
          })
          : <div className={classes.emptyCart}>Your cart is empty.</div>}
      </ul>
      <h3 className={classes.cartTotal}>{`Cart total: $${total}`}</h3>
      <div className={classes.cartButtons}>
        <Button
          onClick={checkOut}
          className={classes.checkoutButton}>Checkout</Button>
        <Button className={classes.continueButton}>Continue Shopping</Button>
      </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   const { byIds, allIds, total } = state.cartItems || {};
//   const cartItems =
//     allIds && allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { cartItems };
// }
// https://react-redux.js.org/introduction/basic-tutorial#common-ways-of-calling-connect
// export default connect(
//   mapStateToProps,
//   { getCartTotal })(CartItemList);

export default connect(
  state => ({
    cartItems: getCartItems(state),
    cartTotal: getTotal(state)
  }),
  null
)(CartItemList);