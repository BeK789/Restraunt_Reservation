import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Je kunt bij ons dan ook terecht voor een tapa bij je wijntje of bij een verfrissende cocktail,
            maar ook zeker voor "La buena mesa" een rijkgevulde tafel met goed eten. Dit doen we in één van Maastrichts mooiste en historische straten.
            Samen met onze chef en ons internationaal team zijn we dagelijks op weg naar de juiste balans tussen de Mediterraanse keuken en ons bourgondische Maastricht.


            </p>
            <Link to={"/*"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="hero1.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
