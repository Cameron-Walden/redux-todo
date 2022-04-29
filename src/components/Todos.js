import React from "react";

const Todos = ({ id, title, completed }) => {
  return (
    <>
      <span>
        <input type="checkbox" checked={completed}></input>
        {title}
      </span>
      <button>delete todo</button>
    </>
  );
};

export default Todos;
