import React from "react";
import about from "../assets/about-banner.jpg";

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <h2 className="section-title">Woodex Store</h2>
        <p className="section-text">
          When you start with a portrait and search for a pure form, a clear
          volume, through successive eliminations, you arrive inevitably at the
          egg. Likewise, starting with the egg and following the same process in
          reverse, one finishes with the portrait.
        </p>
        <div className="about-card">
          <figure
            className="card-banner img-holder"
            // style="--width: 1170; --height: 450"
          >
            <img
              src={about}
              width="1170"
              height="450"
              loading="lazy"
              alt="Woodex promo"
              className="img-cover"
            />
          </figure>

          <button className="play-btn" aria-label="play video">
            <ion-icon name="play-circle-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
