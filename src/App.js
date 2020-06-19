import React, { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import "./css/styles.css";
import { routes } from "./Routes/routes";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Interests from "./Components/Interests";
import Awards from "./Components/Awards";
import Projects from "./Components/Projects";

export default function App() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/") {
      history.replace(routes.home);
    }
  });

  return (
    <div className="App">
      <NavBar />

      <div class="container-fluid p-0">
        <Switch>
          <Route path={routes.home}>
            <About />
          </Route>
          <Route path={routes.about}>
            <About />
          </Route>
          <Route path={routes.experience}>
            <Experience />
          </Route>
          <Route path={routes.projects}>
            <Projects />
          </Route>
          <Route path={routes.education}>
            <Education />
          </Route>
          <Route path={routes.skills}>
            <Skills />
          </Route>
          <Route path={routes.interest}>
            <Interests />
          </Route>
          <Route path={routes.awards}>
            <Awards />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
