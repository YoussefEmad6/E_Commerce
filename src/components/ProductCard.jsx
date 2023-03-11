import React from "react";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
const ProductCard = ({ product }) => {
  const {
    favoritfavoAdd,
    favoritfavoRem,
    addToCart,
    removeFromCart,
    increase,
    favoitems,
    cartItems,
  } = useContext(CartContext);

  const isInCart = (product) => {
    return cartItems?.find((item) => item.id === product.id);
  };

  const isInFav = (product) => {
    return favoitems?.find((item) => item.id === product.id);
  };
  return (
    <li className={product.classname}>
      <div className="product-card">
        <div
          href="#likwodo"
          className="card-banner img-holder has-before"
          // style="--width: 300; --height: 300"
        >
          <img
            src={product.image}
            width="300"
            height="300"
            loading="lazy"
            alt="Wooden Cups"
            className="img-cover"
          />

          <ul className="card-action-list">
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
          </ul>
        </div>

        <div className="card-content">
          <h3 className="h3">
            <a href="#likwodowooden" className="card-title">
              {product.name}
            </a>
          </h3>

          <div className="card-price">
            <data className="price" value="29">
              ${product.price}
            </data>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
