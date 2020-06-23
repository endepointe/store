import React from 'react';

const Product = (props) => {

  const addToCart = (e) => {
    e.preventDefault();
    console.log('item added to cart');
  }

  return (
    <form onSubmit={addToCart}>
      <div>image</div>
      <p>Item: {props.id}</p>
      <p>Price: {props.price}</p>
      <button>Add to cart</button>
    </form>
  )
}

export default Product;