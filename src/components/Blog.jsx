import React from "react";

const Blog = () => {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Explore our blog</h2>

          <a href="#" className="btn-link">
            <span className="span">View All</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </div>

        <ul className="grid-list">
          <li>
            <div className="blog-card">
              <div
                className="card-banner img-holder"
                // style="--width: 374; --height: 243"
              >
                <img
                  src="./assets/images/blog-1.jpg"
                  width="374"
                  height="243"
                  loading="lazy"
                  alt="Unique products that will impress your home in 2022."
                  className="img-cover"
                />

                <a href="#" className="card-btn">
                  <span className="span">Read more</span>

                  <ion-icon name="add-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Unique products that will impress your home in 2022.
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time className="card-meta-text" datetime="2022-09-27">
                      November 27, 2022
                    </time>
                  </li>

                  <li className="card-meta-item">
                    <a href="#" className="card-meta-text">
                      Admin
                    </a>
                  </li>

                  <li className="card-meta-item">
                    in{" "}
                    <a href="#" className="card-meta-text">
                      deco
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <div
                className="card-banner img-holder"
                // style="--width: 374; --height: 243"
              >
                <img
                  src="./assets/images/blog-2.jpg"
                  width="374"
                  height="243"
                  loading="lazy"
                  alt="Navy Blue & White Striped Area Rugs"
                  className="img-cover"
                />

                <a href="#" className="card-btn">
                  <span className="span">Read more</span>

                  <ion-icon name="add-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Navy Blue & White Striped Area Rugs
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time className="card-meta-text" datetime="2022-09-25">
                      November 25, 2022
                    </time>
                  </li>

                  <li className="card-meta-item">
                    <a href="#" className="card-meta-text">
                      Admin
                    </a>
                  </li>

                  <li className="card-meta-item">
                    in{" "}
                    <a href="#" className="card-meta-text">
                      deco
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <div
                className="card-banner img-holder"
                // style="--width: 374; --height: 243"
              >
                <img
                  src="./assets/images/blog-3.jpg"
                  width="374"
                  height="243"
                  loading="lazy"
                  alt="Woodex White Coated Staircase Floating"
                  className="img-cover"
                />

                <a href="#" className="card-btn">
                  <span className="span">Read more</span>

                  <ion-icon name="add-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Woodex White Coated Staircase Floating
                  </a>
                </h3>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <time className="card-meta-text" datetime="2022-09-18">
                      November 18, 2022
                    </time>
                  </li>

                  <li className="card-meta-item">
                    <a href="#" className="card-meta-text">
                      Admin
                    </a>
                  </li>

                  <li className="card-meta-item">
                    in{" "}
                    <a href="#" className="card-meta-text">
                      deco
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;