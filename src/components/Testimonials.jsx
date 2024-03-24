import React from "react";
import { data } from "../restApi.json";
const Testimonials = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">CUSTOMER REVIEWS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container">
          {data[0].testimonials.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.userName} />
                <h3>{element.userName}</h3>
                <h4>{element.rating}</h4>
                <p>{element.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;