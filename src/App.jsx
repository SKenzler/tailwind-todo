import { useState, useEffect } from "react";
import TodoUI from "./components/TodoUI";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [userTodo, setUserTodo] = useState(" ");
  const [editStatus, setEditStatus] = useState(false);

  const saveTodos = (newList) =>
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));

  const handleAddTodos = (userTodo) => {
    const newTodos = [...todos, userTodo];
    setEditStatus(false);
    saveTodos(newTodos);
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    saveTodos(newTodos);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setEditStatus(true);
    const editValue = todos[index];
    setUserTodo(editValue);
    handleDeleteTodo(index);
    console.log(editStatus);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");

    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoUI
        userTodo={userTodo}
        setUserTodo={setUserTodo}
        handleAddTodos={handleAddTodos}
        setEditStatus={setEditStatus}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
        editStatus={editStatus}
        setEditStatus={setEditStatus}
      />
    </>
  );
}

export default App;
