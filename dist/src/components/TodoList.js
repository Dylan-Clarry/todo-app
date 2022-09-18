import React from "react";
import Todo from "./Todo";
const TodoList = ({ todoList, setTodoList, filteredTodoList }) => {
    return (React.createElement("ul", { className: "Todolist" }, filteredTodoList.map((todo) => (React.createElement(Todo, { todo: todo, todoList: todoList, setTodoList: setTodoList, key: todo.id })))));
};
export default TodoList;
//# sourceMappingURL=TodoList.js.map