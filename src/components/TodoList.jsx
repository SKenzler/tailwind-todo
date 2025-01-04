import React, { useState } from "react";
import TodoCard from "./ToDoCard";

const TodoList = () => {
  const [todos, setTodos] = useState(["Write React"]);

  return (
    <div className="flex justify-center items-center flex-col">
      <ul className="w-72 flex flex-col justify-start items-center">
        {todos.map((todo, todoIndex) => {
          return <TodoCard key={todoIndex} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
