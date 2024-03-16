import React, { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [itemlists, setItemlists] = useState([]);

  const addTodoItems = (e)=>{
    setItemlists([...itemlists,e])
  }
  // const itemlists = [
  //   {
  //     title: "HTML",
  //     desc: "HyperText Markup Language",
  //     remark: "structure",
  //   },
  //   {
  //     title: "CSS",
  //     desc: "Cascading Style Sheet",
  //     remark: "Styling",
  //   },
  // ];
  return (
    <div>
      <div className="container py-3 mb-3 mt-5">
        <div className="card">
          <AddTodo f={addTodoItems}/>
        </div>
      </div>
      <Todo todoslist={itemlists} />
    </div>
  );
};

export default App;
