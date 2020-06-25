import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'black'
  }
}));

const Product = (props) => {

  const classes = useStyles();

  const addToCart = (e) => {
    e.preventDefault();
    console.log('item added to cart');
  }

  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <form
          onSubmit={addToCart}>
          <p>Item: {props.id}</p>
          <p>Price: {props.price}</p>
          <button>Add to cart</button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Product;