import React from "react";

const TodoItems = ({ item, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.title}</td>
      <td>{item.desc}</td>
      <td>{item.remark}</td>
    </tr>
  );
};

export default TodoItems;


