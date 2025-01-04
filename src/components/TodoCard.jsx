import React from "react";
import { RiEditCircleFill, RiDeleteBin7Fill } from "react-icons/ri";

const TodoCard = ({ todo, handleDeleteTodo, handleEditTodo, index }) => {
  return (
    <li className="w-full flex justify-between items-center text-lg text-indigo-400 font-semibold italic py-1 px-2">
      {todo}
      <div className="flex py-2">
        <button
          type="button"
          className="flex justify-center items-center w-8 h-8 text-gray-50 bg-blue-500 rounded-md hover:bg-blue-950 transition-all ease-out duration-300 mx-1"
          onClick={() => handleEditTodo(index)}
        >
          <RiEditCircleFill size={14} color="#fff" />
        </button>
        <button
          type="button"
          className="flex justify-center items-center w-8 h-8 text-gray-50 bg-blue-500 rounded-md hover:bg-blue-950 transition-all ease-out duration-300 mx-1"
          onClick={() => handleDeleteTodo(index)}
        >
          <RiDeleteBin7Fill size={14} color="#fff" />
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
