// import { useState } from "react";

const Item = ({ item1, deleteTodo, id, change, isDone }) => {
  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleChange = () => {
    change(id);
  };

  return (
    <li>
      <input type="checkbox" onChange={handleChange} />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {item1}
      </span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};

export default Item;

//三項演算子
// 式 ? trueの時: falseの時
//style={{ textDecoration: isDone ? "line-through" : "none" }}
