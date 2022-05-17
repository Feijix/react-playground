import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const API_URL = '';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartAddItemHandler = item => {
    const cartItem = { ...item, amount: 1 }
    cartContext.addItem(cartItem);
  };

  const cartRemoveItemHandler = id => {
    cartContext.removeItem(id)
  };

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch(`${API_URL}/orders.json`, {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartContext.items
      })
    })
    setIsSubmitting(false)
    setDidSubmit(true)
    cartContext.clearCart()
  }

  const cartItems = <ul className={classes['cart-items']}>
    {cartContext.items.map((item) =>
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onAdd={cartAddItemHandler.bind(null, item)}
        onRemove={cartRemoveItemHandler.bind(null, item.id)}
      />
    )}
  </ul>;

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
      {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>
  )

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />}
      {!isCheckout && modalActions}
    </>
  )

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = <p>Successfully sent the order!</p>

  return (
    <Modal onClose={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && !didSubmit && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  )
}

export default Cart;