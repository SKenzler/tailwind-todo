import { useState } from "react";
import TodoUI from "./components/TodoUI";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [userTodo, setUserTodo] = useState(" ");
  const handleAddTodos = (userTodo) => {
    const newTodos = [...todos, userTodo];
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    const editValue = todos[index];
    setUserTodo(editValue);
    handleDeleteTodo(index);
  };

  return (
    <>
      <TodoUI
        userTodo={userTodo}
        setUserTodo={setUserTodo}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
