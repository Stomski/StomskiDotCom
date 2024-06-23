import React from "react";

export const Navigation = (props) => {
  const handleNavItemClick = () => {
    const navBarCollapse = document.getElementById(
      "bs-example-navbar-collapse-1"
    );
    if (navBarCollapse.classList.contains("in")) {
      // For Bootstrap 3
      navBarCollapse.classList.remove("in");
      navBarCollapse.style.height = "0px";
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Bobby Stomski <span className="nowrap">WEB DEVELOPMENT</span>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#about"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Tech stack
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Project Gallery
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
