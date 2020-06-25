import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Product from './Product';
import {
  useEffect,
  useState
} from 'react';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    flexWrap: 'wrap',
  }
}));

const Products = () => {

  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/get-products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container
      className={classes.root}>
      <CssBaseLine />
      <Grid container spacing={3}>
        {products.map((product, i) =>
          <Product
            key={i}
            name={product.name}
            price={product.price} />)}
      </Grid>
    </Container>
  )
}
export default Products;