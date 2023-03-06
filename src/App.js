import Navebar from "./components/Navebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Productes from "./components/Productes";
import Blog from "./components/Blog";
import NewsLetter from "./components/NewsLetter";
import "./App.css";
function App() {
  return (
    <>
      <Navebar />
      <main>
        <article>
          <Hero />
          <About />
          <Productes />
          <Blog />
          <NewsLetter />
          <NewsLetter />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
