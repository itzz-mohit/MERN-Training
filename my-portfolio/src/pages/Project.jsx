import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Project = () => {
  return (
    <div className="container mt-5 " >
      <h2 className="text-left mb-5  fw-bold">Projects</h2>
      <Carousel autoPlay infiniteLoop>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col d-flex justify-content-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-folder2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z" />
                    </svg>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <a
                      href="https://github.com/itzz-mohit"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                        style={{ textDecoration: "none" }}
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-title">
                  <h3>Projects</h3>
                </div>
                <div className="card-text">
                  Video provides a powerful way to help you prove your point.
                  When you click Online Video, you can paste in the embed code
                  for the video you want to add. You can also type a keyword to
                  search online for the video that best fits your document.
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <h5>
                      <span className="badge bg-secondary">HTML</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-danger">CSS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-success">JS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-warning">React</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col d-flex justify-content-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-folder2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z" />
                    </svg>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <a
                      href="https://github.com/itzz-mohit"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                        style={{ textDecoration: "none" }}
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-title">
                  <h3>Projects</h3>
                </div>
                <div className="card-text">
                  Video provides a powerful way to help you prove your point.
                  When you click Online Video, you can paste in the embed code
                  for the video you want to add. You can also type a keyword to
                  search online for the video that best fits your document.
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <h5>
                      <span className="badge bg-secondary">HTML</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-danger">CSS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-success">JS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-warning">React</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col d-flex justify-content-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-folder2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z" />
                    </svg>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <a
                      href="https://github.com/itzz-mohit"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                        style={{ textDecoration: "none" }}
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-title">
                  <h3>Projects</h3>
                </div>
                <div className="card-text">
                  Video provides a powerful way to help you prove your point.
                  When you click Online Video, you can paste in the embed code
                  for the video you want to add. You can also type a keyword to
                  search online for the video that best fits your document.
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <h5>
                      <span className="badge bg-secondary">HTML</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-danger">CSS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-success">JS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-warning">React</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col d-flex justify-content-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-folder2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z" />
                    </svg>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <a
                      href="https://github.com/itzz-mohit"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                        style={{ textDecoration: "none" }}
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-title">
                  <h3>Projects</h3>
                </div>
                <div className="card-text">
                  Video provides a powerful way to help you prove your point.
                  When you click Online Video, you can paste in the embed code
                  for the video you want to add. You can also type a keyword to
                  search online for the video that best fits your document.
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <h5>
                      <span className="badge bg-secondary">HTML</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-danger">CSS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-success">JS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-warning">React</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col d-flex justify-content-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-folder2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z" />
                    </svg>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <a
                      href="https://github.com/itzz-mohit"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                        style={{ textDecoration: "none" }}
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-title">
                  <h3>Projects</h3>
                </div>
                <div className="card-text">
                  Video provides a powerful way to help you prove your point.
                  When you click Online Video, you can paste in the embed code
                  for the video you want to add. You can also type a keyword to
                  search online for the video that best fits your document.
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <h5>
                      <span className="badge bg-secondary">HTML</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-danger">CSS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-success">JS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-warning">React</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col d-flex justify-content-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-folder2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z" />
                    </svg>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <a
                      href="https://github.com/itzz-mohit"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                        style={{ textDecoration: "none" }}
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-title">
                  <h3>Projects</h3>
                </div>
                <div className="card-text">
                  Video provides a powerful way to help you prove your point.
                  When you click Online Video, you can paste in the embed code
                  for the video you want to add. You can also type a keyword to
                  search online for the video that best fits your document.
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <h5>
                      <span className="badge bg-secondary">HTML</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-danger">CSS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-success">JS</span>
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      <span className="badge bg-warning">React</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Project;
