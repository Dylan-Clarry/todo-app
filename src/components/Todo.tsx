import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faX } from "@fortawesome/free-solid-svg-icons";

interface todoType {
  id: string;
}

const Todo = ({ todo, todoList, setTodoList }) => {
  const deleteTodoHandler = () => {
    setTodoList(todoList.filter((el: todoType) => el.id !== todo.id));
  };

  const completedTodoHandler = () => {
    setTodoList(
      todoList.map((item: todoType) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !todo.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="Todo">
      <span className="todo-text">
        <li>{todo.text}</li>
      </span>
      <button onClick={completedTodoHandler}>
        <FontAwesomeIcon icon={todo.completed ? faX : faCheck} />
      </button>
      <button onClick={deleteTodoHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Todo;
