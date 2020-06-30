import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { addProduct, removeProduct } from '../redux/actions';
import { connect } from 'react-redux';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  item: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    flexDirection: 'row',
    marginBotton: '1rem',
    marginTop: '1rem',
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
    marginRight: '.5rem',
  },
  removeButton: {
    width: '1.5rem',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
  },
  addButton: {
    width: '1.5rem',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    color: 'green',
  }
});

const CartItem = (props) => {
  const classes = useStyles();

  const addItem = () => {
    props.addProduct(props.item.content);
    // props.updateTotal(props.item.content.price);
    props.updateTotal();
  }

  const removeItem = () => {
    // console.log(props.item);
    props.removeProduct(props.item);
  }

  return (
    <li className={classes.item}>
      <span className={classes.name}>{props.item.content.name}</span>
      <span className={classes.price}>$ {props.item.content.price}</span>
      <button
        className={classes.addButton}
        onClick={addItem}>
        <AddIcon />
      </button>
      <button
        className={classes.removeButton}
        onClick={removeItem}>
        <RemoveIcon />
      </button>
    </li>
  );
}

export default connect(
  null,
  { addProduct, removeProduct }
)(CartItem);