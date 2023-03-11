import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favourite from "./pages/Favourite ";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CartContext from "./Context/Cart/CartContext";
import { useContext } from "react";
function App() {
  const { favoitems } = useContext(CartContext);
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favourite" element={<Favourite products={favoitems} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
