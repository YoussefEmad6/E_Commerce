import React from "react";
import CartItem from "../components/CartItem";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";

const Cart = () => {
  const {
    clearCart,
    handleCheckout,
    itemCount,
    total,
    cartItems,
  } = useContext(CartContext);
  return (
    <div className={cartItems.length > 0 ? " cartItem" : "test"}>
      {cartItems.length > 0 ? (
        <>
          <ul className="cart-list">
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className="wrapper-item">
            <p>Total Items:</p>
            <h4>{itemCount}</h4>
            <p>Total Payment:</p>
            <h4>${total}</h4>
            <hr />
            <div className="btncontainer">
              <button className="chekbtn" onClick={handleCheckout}>
                CHECKOUT
              </button>
              <button className="clearbtn" onClick={clearCart}>
                CLEAR
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>No productes....</p>
      )}
    </div>
  );
};

export default Cart;
