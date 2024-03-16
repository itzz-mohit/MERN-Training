import React from "react";
import { boy } from "../assets/index";
import Style from "./cssModules/Image.module.css";
const Image = () => {
  return (
    <div>
      <img src={boy} class="img-fluid" alt="..." className={Style.myImage} />
    </div>
  );
};

export default Image;
