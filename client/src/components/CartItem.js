import React from 'react';
import { connect } from 'react-redux';

const CartItem = (props) => (
  <span>
    {props.item.content.name} {' '}
    {props.item.content.price}
  </span>
)

export default connect(
  null,
)(CartItem);