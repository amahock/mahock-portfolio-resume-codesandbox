import React from "react";

const Awards = () => {
  return (
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Awards & Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-certificate text-warning" />
            </span>
            {/* <span
              class="iconify text-warning"
              data-icon="mdi:certificate"
              data-inline="false"
            /> */}
            Fullstack Developement Certification from GUVI,IITM Chennai
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-certificate text-warning" />
            </span>
            IBM DB2 Fundamentals - IBM Certification
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning" />
            </span>
            Awarded "On The Spot Award" for excellent work and for the
            Automation - Tata Consultancy Services
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;
