import React, { useState } from "react";
import TodoForm from "./TodoForm";

function Todo() {
  const [todos, setTodos] = useState([]);

  function addNewTodoItem(newTodo) {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  }
  console.log(todos);
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo1={addNewTodoItem} />

      {todos.map((todo) => (
        <div>
          <p key = {todo.id === 0 ? "Title: " : "" }>{todo.text}</p>
          {/* <p key = {todo.id !== 0 ? `${todo.id} ${todo.text}` : "" }></p> */}
          </div>

  ))
}
{/* <TodoForm addTodo={addNewTodoItem} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul> */}
    </div >
  );
}

export default Todo;