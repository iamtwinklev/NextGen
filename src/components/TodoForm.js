import React, { useState } from "react";

function TodoForm({ addTodo , addTodo1}) {
  const [inputValue, setInputValue] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };
  const handleSubmitTitle = (e) => {
    e.preventDefault();
    addTodo1(inputTitle);
    setInputTitle("");
  };

  return (
    <>
      <form onSubmit={handleSubmitTitle} className="my-5">
        <label htmlfor="title">Enter title</label>
        <input type="text"
        title={true}
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />

        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
      <form onSubmit={handleSubmit} className="my-5">
        <label htmlfor="options" className="my-2">

          Enter options
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;