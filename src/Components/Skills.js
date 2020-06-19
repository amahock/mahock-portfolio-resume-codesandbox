import React from "react";

const Skills = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">
          Fullstack Development Programming Languages & Tools
        </div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js" />
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm" />
          </li>
          <li className="list-inline-item">
            <span
              class="iconify"
              data-icon="logos:mongodb"
              data-inline="false"
            />
          </li>
          <li className="list-inline-item">
            <span
              class="iconify"
              data-icon="logos:express"
              data-inline="false"
            />
          </li>
          <li className="list-inline-item">
            <span
              class="iconify"
              data-icon="logos:postgresql"
              data-inline="false"
            />
          </li>
        </ul>

        <div className="subheading mb-3">
          Mainframe Programming Languages & Tools
        </div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            COBOL
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            JCL
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            REXX
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            DB2
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            VSAM
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            CA7
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            Endevor
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            FileAid
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            JMR
          </li>
        </ul>
        <br />
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            Mainframe Application Development
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            Application Testing & Debugging
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            Production support
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            Agile Development & Scrum
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check" />
            </span>
            Web Development, Responsive Design and Testing & Debugging
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
