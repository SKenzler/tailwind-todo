import React from "react";
import { RiTodoFill, RiAddCircleFill } from "react-icons/ri";

const TodoUI = ({ handleAddTodos, userTodo, setUserTodo }) => {
  return (
    <header className="flex flex-col">
      <div className="flex justify-center items-center bg-indigo-400 px-2">
        <div className="w-[35em] flex justify-center items-center">
          <RiTodoFill size={18} color="#fff" />
          <div className="w-1/2 text-gray-50 text-lg sm:text-xl font-bold uppercase tracking-wide px-2 py-3">
            Task Tracker
          </div>

          <div className="w-full text-center text-gray-50 textbase sm:text-lg font-normal tracking-normal p-2">
            Add a <i>task</i> that you would like to complete
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-4">
        <input
          type="text"
          placeholder="Add a task"
          value={userTodo}
          onChange={(e) => setUserTodo(e.target.value)}
          className="min-w-96 h-8 text-gray-400 text-lg font-normal border border-gray-400 rounded-md outline-none pl-2 placeholder:text-base tracking-normal m-4"
        />
        <button
          type="button"
          className="flex justify-center items-center w-8 h-8 text-gray-50 bg-blue-500 rounded-md hover:bg-blue-950 transition-all ease-out duration-300"
          onClick={() => {
            handleAddTodos(userTodo);
            setUserTodo("");
          }}
        >
          {" "}
          <RiAddCircleFill size={14} color="#fff" />
        </button>
      </div>
    </header>
  );
};

export default TodoUI;
