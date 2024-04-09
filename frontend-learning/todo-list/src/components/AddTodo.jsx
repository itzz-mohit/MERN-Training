import React, { useState } from "react";
import Style from "../CSSModules/TodoCSS.module.css";

const AddTodo = (props) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [remark, setremark] = useState("");

  const todoItems = {
    title: title,
    desc: desc,
    remark: remark,
  };

  return (
    <div className={`${Style.m}`}>
      <div className={`${Style.heading}`}>
        <h3>Add Todo</h3>
      </div>
      <div className="row">
        <div className="col-3">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            placeholder="Remark"
            className="form-control"
            value={remark}
            onChange={(e) => setremark(e.target.value)}
          />
        </div>
      </div>

      <div className={`${Style.heading} mt-3 mb-3`}>
        <button
          type="button"
          className="btn btn-dark px-5"
          onClick={(event) => {
            props.f(todoItems);
            settitle("");
            setdesc("");
            setremark("");
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
