import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routes/routes";
import profileImage from "../Images/profile.JPG";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <Link className="navbar-brand js-scroll-trigger" to={routes.home}>
        <span className="d-block d-lg-none">Mahock Abraham</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={profileImage}
            alt=""
          />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to={routes.about}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to={routes.experience}>
              Experience
            </Link>

            {/* <a className="nav-link js-scroll-trigger" href={routes.experience}>
              Experience
            </a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to={routes.education}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to={routes.skills}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to={routes.interest}>
              Interests
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to={routes.awards}>
              Awards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
