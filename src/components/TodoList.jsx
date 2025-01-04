import React, { useState } from "react";
import TodoCard from "./ToDoCard";

const TodoList = ({
  todos,
  handleDeleteTodo,
  handleEditTodo,
  editStatus,
  setEditStatus,
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <ul className="w-72 flex flex-col justify-start items-center">
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard
              key={todoIndex}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleEditTodo={handleEditTodo}
              editStatus={editStatus}
              setEditStatus={setEditStatus}
              index={todoIndex}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
