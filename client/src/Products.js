import React from 'react';
import Product from './Product';
import {
  // useEffect,
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

  // useEffect(() => {
  //   axios.post('/api/populate', {
  //     arr: inventory 
  //   }).then(response => console.log(response))
  //     .catch(error => console.log(error));
  // });

  return (
    <article>
      {inventory.map((p, i) => <Product key={i} id={p.name} price={p.price} />)}
    </article>
  )
}

export default Products;