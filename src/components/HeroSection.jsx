import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
            <div className="textWithSvg">
              <h1 className="title">We Love Food</h1>
            </div>
      </div>
    </section>
  );
};

export default HeroSection;
