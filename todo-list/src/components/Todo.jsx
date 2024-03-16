import React from "react";
import Style from "../CSSModules/TodoCSS.module.css";
import TodoItems from "./TodoItems";

const Todo = ({ todoslist }) => {
  return (
    <div className={`${Style.m}`}>
      <div className={`${Style.heading}`}>
        <h3>Todo List</h3>
      </div>
      {todoslist.length == 0 ? (
        <div className="alert alert-danger" role="alert">
          Not Todos Available
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Title</th>
              <th scope="col">Desc</th>
              <th scope="col">Remark</th>
            </tr>
          </thead>
          <tbody>
            {todoslist.map((item, index) => (
              <TodoItems item={item} index={index} key={index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Todo;
