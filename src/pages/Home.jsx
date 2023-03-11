import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Productes from "../components/Productes";
import Blog from "../components/Blog";
import NewsLetter from "../components/NewsLetter";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
const Home = () => {

  return (
    <>
      <Hero />
      <About />
      <Productes />
      <Blog />
      <NewsLetter />
    </>
  );
};

export default Home;
