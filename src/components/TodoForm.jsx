import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (input) {
      // add todo
      addTodo(input);
      // clear form after submission
      setInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
