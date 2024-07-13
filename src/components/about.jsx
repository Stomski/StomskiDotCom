import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>About Me</h3>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>What can I offer your team?</h3>
              <div className="list-style">
                <div
                  id="about-list"
                  className="about-list-1 col-lg-6 col-sm-6 col-xs-12"
                >
                  <ul id="about-list-1">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div
                  id="about-list"
                  className="about-list-2 col-lg-6 col-sm-6 col-xs-12"
                >
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
