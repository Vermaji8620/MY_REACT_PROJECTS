import React from "react";

const TodoItems = (props) => {
  return (
    <div>
      <h2>{props.todo.title}</h2>
      <h3>{props.todo.desc}</h3>
      <button
        onClick={() => {
          props.ondelete(props.todo);
        }}
        className="btn btn-primary"
      >
        DELETE
      </button>
      <hr />
    </div>
  );
};

export default TodoItems;
