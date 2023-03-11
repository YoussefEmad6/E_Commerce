import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data";
// import images1 from "../assets/product-1.jpg";
// import images2 from "../assets/product-2.jpg";
// import images3 from "../assets/product-3.jpg";
// import images4 from "../assets/product-4.jpg";
// import images5 from "../assets/product-5.jpg";
// import images6 from "../assets/product-6.jpg";

const Productes = () => {
  return (
    <section className="section product" id="product" aria-label="product">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Popular Products</h2>

          <ul className="filter-btn-list">
            <li className="filter-btn-item">
              <button className="filter-btn active" data-filter-btn="all">
                All Products
              </button>
            </li>

            <li className="filter-btn-item">
              <button className="filter-btn" data-filter-btn="accessory">
                Accessory
              </button>
            </li>

            <li className="filter-btn-item">
              <button className="filter-btn" data-filter-btn="decoration">
                Decoration
              </button>
            </li>

            <li className="filter-btn-item">
              <button className="filter-btn" data-filter-btn="furniture">
                Furniture
              </button>
            </li>
          </ul>
        </div>

        <ul className="grid-list product-list" data-filter="all">
          {/* <li className="decoration">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Animi Dolor Pariatur"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>

                <ul className="badge-list">
                  <li>
                    <div className="badge orange">Sale</div>
                  </li>

                  <li>
                    <div className="badge cyan">-10%</div>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Animi Dolor Pariatur
                  </a>
                </h3>

                <div className="card-price">
                  <del className="del">$19.00</del>

                  <data className="price" value="10">
                    $10.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Art Deco Home"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>

                <div className="card-badge">Out of Stock</div>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Art Deco Home
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="30">
                    $30.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images6}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Artificial potted plant"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Artificial potted plant
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="40">
                    $40.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images5}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Dark Green Jug"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Dark Green Jug
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="17.10">
                    $17.10
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="accessory">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Drinking Glasses"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Drinking Glasses
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="21">
                    $21.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="furniture">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Helen Chair"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Helen Chair
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="69.50">
                    $69.50
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="accessory">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="High Quality Glass Bottle"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    High Quality Glass Bottle
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="30.10">
                    $30.10
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="accessory">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Living Room & Bedroom Lights"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Living Room & Bedroom Lights
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="45">
                    $45.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="furniture">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Nancy Chair"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Nancy Chair
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="90">
                    $90.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="furniture">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Simple Chair"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Simple Chair
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="40">
                    $40.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="decoration">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Smooth Disk"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Smooth Disk
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="46">
                    $46.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="furniture">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Table Black"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Table Black
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="67">
                    $67.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="furniture">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images1}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Table Wood Pine"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Table Wood Pine
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="50">
                    $50.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="accessory">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images2}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Teapot with black tea"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Teapot with black tea
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="25">
                    $25.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="decoration">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images2}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Unique Decoration"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Unique Decoration
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="15">
                    $15.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="decoration">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images2}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Vase Of Flowers"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Vase Of Flowers
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="77">
                    $77.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="decoration">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images2}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Wood Eggs"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Wood Eggs
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="19">
                    $19.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="decoration">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images4}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Wooden Box"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodo" className="card-title">
                    Wooden Box
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="27">
                    $27.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}

          {/* <li className="accessory">
            <div className="product-card">
              <a
                href="#likwodo"
                className="card-banner img-holder has-before"
                // style="--width: 300; --height: 300"
              >
                <img
                  src={images3}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Wooden Cups"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="add-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#likwodowooden" className="card-title">
                    Wooden Cups
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="29">
                    $29.00
                  </data>
                </div>
              </div>
            </div>
          </li> */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Productes;
