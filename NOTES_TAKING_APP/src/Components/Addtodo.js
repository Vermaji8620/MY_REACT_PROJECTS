import React from "react";
import { useState } from "react";

const Addtodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="container">
      <h1 className="text-center">ADD A TODO</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          !(title || desc)
            ? alert("title or description cannot be blank")
            : props.addtodo(title, desc);
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            value={title}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            value={desc}
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
