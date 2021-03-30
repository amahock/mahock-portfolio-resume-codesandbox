import React from "react";
// npm install --save-dev @iconify/react @iconify/icons-simple-icons
import { Icon } from "@iconify/react";
import codesandboxIcon from "@iconify/icons-simple-icons/codesandbox";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Mahock <span className="text-primary">Abraham</span>
        </h1>
        <div className="subheading mb-5">
          Tellus Avenue 5th street · Sembakkam, Chennai- 600073 · 9677987802 ·{" "}
          <a href="mailto:amahock@gmail.com">amahock@gmail.com</a>
        </div>
        <p className="lead mb-5">
          I am experienced in Mainframe Development with 7 years in analysis,
          maintenance and development in banking domain.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/mahock-abraham-095aa537/"
            target="blank"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="social-icon"
            href="https://github.com/amahock"
            target="blank"
          >
            <i className="fab fa-github" />
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/home"
            target="blank"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="social-icon"
            href="https://codesandbox.io/u/amahock"
            target="blank"
          >
            <Icon icon={codesandboxIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
