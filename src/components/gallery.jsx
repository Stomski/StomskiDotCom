import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  const firstSection = props.data ? props.data.slice(0, 6) : [];
  const secondSection = props.data ? props.data.slice(6) : [];

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title gallery-titles-div">
          <h2>Project Gallery</h2>
          <p>Click on an example below to visit that domain!</p>
        </div>
        <div className="row project-gallery-div" id="project-gallery-div">
          <div className="portfolio-items">
            {firstSection.length > 0
              ? firstSection.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        <div
          className="section-title gallery-titles-div"
          id="other-projects-title-div"
        >
          <h2 id="other-projects-title">Other Endeavors</h2>
          <p>Please get in touch to find out more!</p>
        </div>
        <div className="row project-gallery-div" id="project-gallery-div">
          <div className="portfolio-items">
            {secondSection.length > 0
              ? secondSection.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
