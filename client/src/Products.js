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

const inventory = [
  {
    name: 'prod1',
    price: 10
  },
  {
    name: 'prod2',
    price: 40
  },
  {
    name: 'prod3',
    price: 55
  },
  {
    name: 'prod4',
    price: 15
  },
  {
    name: 'prod5',
    price: 2
  },
  {
    name: 'prod6',
    price: 200
  },
];
const Products = () => {

  useEffect(() => {
  });

  return (
    <article>
      {inventory.map((p, i) => <Product key={i} id={p.name} price={p.price} />)}
    </article>
  )
}

export default Products;