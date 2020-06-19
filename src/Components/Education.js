import React from "react";

const Education = () => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Thiagarajar College of Engineering</h3>
            <div className="subheading mb-3">Bachelor of Engineering</div>
            <div>Computer Science</div>
            <p>CGPA: 8.51</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">July 2008 - May 2012</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">St Anne's Higher Secondary School</h3>
            <div className="subheading mb-3">
              Computer Science with Mathematics
            </div>
            <p>Percentage: 92.25%</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">June 2006 - April 2008</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
