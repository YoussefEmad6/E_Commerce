import React from "react";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";

const FavouriteItem = ({ favo }) => {
  const { favoritfavoRem, addToCart, removeFromCart, increase, cartItems } =
    useContext(CartContext);
  const isInCart = (product) => {
    return cartItems.find((item) => item.id === product.id);
  };
  console.log(cartItems);
  return (
    <li className={favo.classname}>
      <div className="product-card">
        <div
          href="#likwodo"
          className="card-banner img-holder has-before"
          // style="--width: 300; --height: 300"
        >
          <img
            src={favo.image}
            width="300"
            height="300"
            loading="lazy"
            alt="Wooden Cups"
            className="img-cover"
          />

          <ul className="card-action-list">
            <li>
              {isInCart(favo) ? (
                <button
                  className="card-action-btn"
                  aria-label="remove from cart"
                  title="remove from cart"
                  onClick={() => removeFromCart(favo)}
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              ) : (
                <button
                  className="card-action-btn"
                  aria-label="add to cart"
                  title="add to cart"
                  onClick={() => addToCart(favo)}
                >
                  <ion-icon
                    name="bag-handle-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </button>
              )}
            </li>
            {isInCart(favo) && (
              <li>
                <button
                  className="card-action-btn"
                  aria-label="add to cart"
                  title="add to cart"
                  onClick={() => increase(favo)}
                >
                  <ion-icon name="add-outline" aria-hidden="true"></ion-icon>
                </button>
              </li>
            )}

            <li>
              <button
                className="card-action-btn heart"
                aria-label="remov from whishlist"
                title="remov from whishlist"
                onClick={() => favoritfavoRem(favo)}
              >
                <ion-icon name="heart" aria-hidden="true"></ion-icon>
              </button>
            </li>
          </ul>
        </div>

        <div className="card-content">
          <h3 className="h3">
            <a href="#likwodowooden" className="card-title">
              {favo.name}
            </a>
          </h3>

          <div className="card-price">
            <data className="price" value="29">
              ${favo.price}
            </data>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FavouriteItem;
