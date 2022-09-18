import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
const Todo = ({ todo, todoList, setTodoList }) => {
    const deleteTodoHandler = () => {
        setTodoList(todoList.filter((el) => el.id !== todo.id));
    };
    const completedTodoHandler = () => {
        setTodoList(todoList.map((item) => {
            if (item.id === todo.id) {
                return Object.assign(Object.assign({}, item), { completed: !todo.completed });
            }
            return item;
        }));
    };
    return (React.createElement("div", { className: "Todo" },
        React.createElement("span", { className: "todo-text" },
            React.createElement("li", null, todo.text)),
        React.createElement("button", { onClick: completedTodoHandler },
            React.createElement(FontAwesomeIcon, { icon: todo.completed ? faX : faCheck })),
        React.createElement("button", { onClick: deleteTodoHandler },
            React.createElement(FontAwesomeIcon, { icon: faTrash }))));
};
export default Todo;
//# sourceMappingURL=Todo.js.map