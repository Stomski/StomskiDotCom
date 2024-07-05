import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tech Stack</h2>
          <p>
            Always looking to expand my capabilities! See the project gallery
            for implimentations of these technologies.
          </p>
        </div>
        <div id="tech-stack-cards-div" className="tech-stack-cards-div row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4 tech-stack-cards"
                >
                  {" "}
                  <i className={`fa ${d.icon}`}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
