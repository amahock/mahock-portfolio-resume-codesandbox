import React from "react";

const Experience = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Programmer Analyst II</h3>
            <div className="subheading mb-3">
              FIS Global Information Systems
            </div>
            <p>
              Business requirement specification review and analysis. Detail
              design and test script preparation. Development of programs as per
              design and testing. Code review and defect fixing. Resource and
              task allocation and mentoring team members. Oversee technical
              implementation of project.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2015 - Present</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Developer</h3>
            <div className="subheading mb-3">Tata Consultancy Services</div>
            <p>
              Performed as a team member on agile team focused on software
              development and support. Regularly led daily status meeting and
              scrum call with the client to get the requirements. Design,
              develop, and deliver software solutions in an Agile environment.
              Created and maintained project tasks and schedules. Code testing
              and defect fixing.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">June 2012 - July 2015</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
