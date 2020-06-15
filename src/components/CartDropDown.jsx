import React from 'react';
import './styles/cartDropDown.styles.scss';

import CustomButton from './CustomButton';

const CartDropDown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);
export default CartDropDown;
