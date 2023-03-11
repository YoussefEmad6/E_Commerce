import React from "react";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";

const CartItem = ({ product }) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);
  return (
    <li className={product.classname}>
      <div className="product-card-item">
        <button
          className="card-action-btn-item"
          aria-label="remove from cart"
          title="remove from cart"
          onClick={() => removeFromCart(product)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div
          href="#likwodo"
          className="card-banner img-holder has-before imgCart"
          // style="--width: 300; --height: 300"
        >
          <img
            src={product.image}
            width="300"
            height="300"
            loading="lazy"
            alt="Wooden Cups"
            className="img-cover-item"
          />

          {/* <ul className="card-action-list">
        <li>
          {isInCart(product) ? (
            <button
              className="card-action-btn"
              aria-label="remove from cart"
              title="remove from cart"
              onClick={() => removeFromCart(product)}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          ) : (
            <button
              className="card-action-btn"
              aria-label="add to cart"
              title="add to cart"
              onClick={() => addToCart(product)}
            >
              <ion-icon
                name="bag-handle-outline"
                aria-hidden="true"
              ></ion-icon>
            </button>
          )}
        </li>

        {isInCart(product) && (
          <li>
            <button
              className="card-action-btn"
              aria-label="add to cart"
              title="add to cart"
              onClick={() => increase(product)}
            >
              <ion-icon name="add-outline" aria-hidden="true"></ion-icon>
            </button>
          </li>
        )}

        <li>
          {isInFav(product) ? (
            <button
              className="card-action-btn heart"
              aria-label="remov from whishlist"
              title="remov from whishlist"
              onClick={() => favoritfavoRem(product)}
            >
              <ion-icon name="heart" aria-hidden="true"></ion-icon>
            </button>
          ) : (
            <button
              className="card-action-btn"
              aria-label="add to whishlist"
              title="add to whishlist"
              onClick={() => favoritfavoAdd(product)}
            >
              <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
            </button>
          )}
        </li>
      </ul> */}
        </div>

        <div className="card-content-item">
          <h3 className="h3-item">{product.name}</h3>

          <div className="card-price">
            <data className="price" value="29">
              ${product.price}
            </data>
          </div>
        </div>
        <ul className="cart-icon-list">
          <li>
            <button
              className="card-action-btn"
              aria-label="add to cart"
              title="add to cart"
              onClick={() => increase(product)}
            >
              <ion-icon name="add-outline" aria-hidden="true"></ion-icon>
            </button>
          </li>
          <li>
            <p>Q: {product.quantity}</p>
          </li>
          <li>
            {product.quantity > 1 ? (
              <button
                className="card-action-btn"
                aria-label="add to cart"
                title="add to cart"
                onClick={() => decrease(product)}
              >
                <ion-icon name="remove-outline" c></ion-icon>
              </button>
            ) : (
              <button
                className="card-action-btn"
                aria-label="add to cart"
                title="add to cart"
                onClick={() => removeFromCart(product)}
              >
                <ion-icon name="remove-outline"></ion-icon>
              </button>
            )}
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CartItem;
