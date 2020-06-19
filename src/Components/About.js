import React from "react";
// npm install --save-dev @iconify/react @iconify/icons-simple-icons
import { Icon } from "@iconify/react";
import codesandboxIcon from "@iconify/icons-simple-icons/codesandbox";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <section class="resume-section" id="about">
      <div class="resume-section-content">
        <h1 class="mb-0">
          Mahock <span class="text-primary">Abraham</span>
        </h1>
        <div class="subheading mb-5">
          Tellus Avenue 5th street · Sembakkam, Chennai- 600073 · 9677987802 ·{" "}
          <a href="mailto:amahock@gmail.com">amahock@gmail.com</a>
        </div>
        <p class="lead mb-5">
          I am experienced in Mainframe Development with 7 years in analysis,
          maintenance and development in banking domain.
        </p>
        <div class="social-icons">
          <a
            class="social-icon"
            href="https://www.linkedin.com/in/mahock-abraham-095aa537/"
            target="blank"
          >
            <i class="fab fa-linkedin-in" />
          </a>
          <a
            class="social-icon"
            href="https://github.com/amahock"
            target="blank"
          >
            <i class="fab fa-github" />
          </a>
          <a class="social-icon" href="https://twitter.com/home" target="blank">
            <i class="fab fa-twitter" />
          </a>
          <a
            class="social-icon"
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
