import React from "react";
import Style from "./cssModules/Desc.module.css";

const Desc = () => {
  return (
    <div>
      <h3>About Myself</h3>
      <p className={Style.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button type="button" class="btn btn-primary btn-lg">
        Linkedin
      </button>
    </div>
  );
};

export default Desc;
