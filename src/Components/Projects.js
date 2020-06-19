import React from "react";

const Projects = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">FullStack Development Projects</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Java Learning Site Creaton</h3>
            <div className="subheading mb-3">
              FIS Global Information Systems
            </div>
            <p>
                Developing the learning site for Java programming language for beginners. 
                It gives the better understanding for the beginners on Object Oriented Programming Language and the basics of Java languageand the syntax.
                The documents are containing the examples for the topics explained and have some practice excersise.
            </p>
          You can access the site in heroku : 
          </div>
          {/* <div className="flex-shrink-0">
            <span className="text-primary">August 2015 - Present</span>
          </div> */}
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Quiz Application Creation</h3>
            {/* <div className="subheading mb-3">Tata Consultancy Services</div> */}
            <p>
              Developed a quiz application to test knowledge on the topics.
              It will show the each questions results once it got submitted and also show the cumulative mark at the end of the quiz.
              Also you can share the results through scocial media like facebook,whasapp, etc...
            </p>
          </div>
          {/* <div className="flex-shrink-0">
            <span className="text-primary">June 2012 - July 2015</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
