import React from "react";
import product1 from "../assets/hero-product-1.jpg";
import product2 from "../assets/hero-product-2.jpg";
import product3 from "../assets/hero-product-3.jpg";
import product4 from "../assets/hero-product-4.jpg";
import product5 from "../assets/hero-product-5.jpg";

const Hero = () => {
  return (
    <section className="section hero" id="home" aria-label="home">
      <div className="container">
        <ul className="hero-list">
          <li>
            <div className="hero-card">
              <figure
                className="card-banner img-holder"
                // style={{ width: 285, height: 396 }}
              >
                <img src={product1} alt="Art Deco Home" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3>
                  <a href="#product" className="card-title">
                    Art Deco Home
                  </a>
                </h3>

                <p className="card-text">Decoration</p>
              </div>
            </div>
          </li>
          <li className="colspan-2">
            <div className="hero-card">
              <figure
                className="card-banner img-holder"
                // style={{ width: 285, height: 396 }}
              >
                <img src={product2} alt="Helen Chair" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3>
                  <a href="#product" className="card-title">
                    Helen Chair
                  </a>
                </h3>

                <p className="card-text">Decoration</p>
              </div>
            </div>
          </li>
          <li>
            <div className="hero-card">
              <figure
                className="card-banner img-holder"
                // style={{ width: 285, height: 396 }}
              >
                <img
                  src={product3}
                  alt="Vase Of Flowers"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3>
                  <a href="#product" className="card-title">
                    Vase Of Flowers
                  </a>
                </h3>

                <p className="card-text">Decoration</p>
              </div>
            </div>
          </li>
          <li className="colspan-2">
            <div className="hero-card">
              <figure
                className="card-banner img-holder"
                // style={{ width: 285, height: 396 }}
              >
                <img src={product4} alt="Wood Eggs" className="img-cover" />
              </figure>
              <div className="card-content">
                <h3>
                  <a href="#product" className="card-title">
                    Wood Eggs
                  </a>
                </h3>

                <p className="card-text">Decoration</p>
              </div>
            </div>
          </li>
          <li className="colspan-2">
            <div className="hero-card">
              <figure
                className="card-banner img-holder"
                // style={{ width: 285, height: 396 }}
              >
                <img
                  src={product5}
                  alt="Table Wood Pine"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3>
                  <a href="#product" className="card-title">
                    Table Wood Pine
                  </a>
                </h3>

                <p className="card-text">Furniture</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
