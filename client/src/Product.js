import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'black'
  },
  productImg: {
    width: "100%",
    height: '168px',
    maxHeight: '200px',
    backgroundImage: "url('https://via.placeholder.com/278x168?text=Product+Img')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflowX: 'hidden',
  },
  button: {
    backgroundColor: 'var(--cartbutton-color)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'var(--other-color)',
    }
  }
}));

const Product = (props) => {

  const classes = useStyles();

  const addToCart = (e) => {
    e.preventDefault();
    console.log(`${props.name} added to cart`);
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper className={classes.paper}>
        <div className={classes.productImg}></div>
        <form>
          <p>Item: {props.name}</p>
          <p>Price: {props.price}</p>
          <Button
            onClick={addToCart}
            className={classes.button}>Add to cart</Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Product;