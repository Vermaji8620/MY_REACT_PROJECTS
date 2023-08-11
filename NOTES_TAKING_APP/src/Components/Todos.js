import React from "react";
import TodoItems from "./TodoItems";

const Todos = (props) => {
  return (
    <div className="container ">
      <h3 className="text-center">Todos list</h3>
      {props.todos.length !== 0
        ? props.todos.map((todo) => {
            return (
              <>
                <h2>TODO :-</h2>
                <TodoItems
                  todo={todo}
                  key={todo.sno}
                  ondelete={props.ondelete}
                ></TodoItems>
              </>
            );
          })
        : "NOTHING TO  DISPLAY"}
    </div>
  );
};

export default Todos;
