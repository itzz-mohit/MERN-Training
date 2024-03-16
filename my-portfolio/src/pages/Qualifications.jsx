import React from "react";

export default function Qualifications() {
  return (
    <div className="container mt-5">
      <h2 className="text-left mb-5  fw-bold">Qualifications</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col mb-4">
          <div className="card h-100 border-primary hover-shadow">
            <div className="card-body">
              <h3 className="fs-3 text-primary">Matriculation</h3>
              <div className="d-flex align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#007BFF"
                  className="bi bi-calendar my-2 me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <span className="fw-bold text-muted">2016-2017</span>
              </div>
              <p className="card-text text-muted">
                Achieved a perfect 10 CGPA in Class 10th, showcasing dedication
                to academic excellence and consistently striving for the highest
                standards.
              </p>
            </div>
          </div>
        </div>

        {/* Repeat the above structure for Intermediate and B.Tech sections */}

        <div className="col mb-4">
          <div className="card h-100 border-primary hover-shadow">
            <div className="card-body">
              <h3 className="fs-3 text-primary">Intermediate</h3>
              <div className="d-flex align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#007BFF"
                  className="bi bi-calendar my-2 me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <span className="fw-bold text-muted">2017-2019</span>
              </div>
              <p className="card-text text-muted">
                Secured an impressive 77% overall in Class 12th, demonstrating
                commitment to excellence and consistent delivery of results.
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100 border-primary hover-shadow">
            <div className="card-body">
              <h3 className="fs-3 text-primary">B.Tech (CSE)</h3>
              <div className="d-flex align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#007BFF"
                  className="bi bi-calendar my-2 me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <span className="fw-bold text-muted">2020-2024</span>
              </div>
              <p className="card-text text-muted">
                Graduated with a commendable CGPA of 7.7 in B.Tech (CSE),
                showcasing a strong commitment to excellence and a passion for
                cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

