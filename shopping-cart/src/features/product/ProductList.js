import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './productSlice';
import styles from './Product.module.css';

export function ProductList() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <Product />
    </div>
  );
}
