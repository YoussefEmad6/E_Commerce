import React from "react";
import CartContext from "../Context/Cart/CartContext";
import FavouriteItem from "../components/FavouriteItem";
import { useContext } from "react";
const Favourite = ({ products }) => {
  const {
    favoitems,

  } = useContext(CartContext);

  // console.log(favoitems);
  return (
    <ul className={favoitems.length > 0 ? "grid-list product-list " : "test"}>
      {favoitems.map((favo) => (
        <FavouriteItem key={favo.id} favo={favo} />
      ))}
    </ul>
  );
};

export default Favourite;
