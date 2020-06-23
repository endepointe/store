import React from 'react';
import Product from './Product';
// each product will be given 
// unique product details.
// will vary by the kind of
// product sold by the store.
import {
  useEffect,
  useState
} from 'react';
import axios from 'axios';

const Products = () => {

  useEffect(() => {
    axios.get('/create')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  });

  const inventory = [
    {
      id: 1,
      price: 13.99
    },
    {
      id: 2,
      price: 4.99
    },
    {
      id: 3,
      price: 0.99
    },
    {
      id: 4,
      price: 13.99
    },
    {
      id: 5,
      price: 1.99
    },
  ];

  return (
    <section>
      {inventory.map((p, i) => <Product key={i} id={p.id} price={p.price} />)}
    </section>
  )
}

export default Products;