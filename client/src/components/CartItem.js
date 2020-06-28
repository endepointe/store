import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { removeProduct } from '../redux/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  item: {
    width: '100%',
    display: 'flex',
    listStyle: 'none',
    flexDirection: 'row',
    marginBotton: '1rem',
    marginTop: '1rem',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
    backgroundColor: '#ededed',
  },
  name: {
    flex: 1,
    display: 'flex',
    marginLeft: '2rem',
  },
  price: {
    flex: 1,
    textAlign: 'right',
    marginRight: '2rem',
  }
});

const CartItem = (props) => {
  const classes = useStyles();

  const removeItem = () => {
    // props.removeProduct(props.item);
  }
  return (
    <li className={classes.item}>
      <span className={classes.name}>{props.item.content.name}</span>
      <span className={classes.price}>$ {props.item.content.price}</span>
      <button onClick={removeItem}>remove</button>
    </li>
  );
}

export default connect(
  null,
  { removeProduct }
)(CartItem);