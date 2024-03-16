import React from "react";
import Style from "./cssModules/Desc.module.css";

const Header = () => {
  return (
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Mohit Kumar</h1>
        <p class={`col-md-8 fs-4 `}>
          I am a passionate MERN Stack Developer, I specialize in crafting
          robust and scalable web applications. With a strong foundation in
          MongoDB, Express.js, React, and Node.js, I bring a wealth of
          experience in designing and implementing innovative solutions. My
          commitment to clean code, efficient problem-solving, and staying
          current with emerging technologies allows me to deliver high-quality
          software that meets and exceeds client expectations.
        </p>
        <button class="btn btn-primary btn-lg" type="button">
          Linkedin
        </button>
      </div>
    </div>
  );
};

export default Header;
