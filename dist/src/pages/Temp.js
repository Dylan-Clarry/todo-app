import React from "react";
import { useState, useEffect } from "react";
import "./assets/styles/global.scss";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import Navbar from "../components/layout/Navbar";
import { ThemeContextProvider } from "../context/ThemeContext";
const Temp = () => {
    const [trackIdMax, setTrackIdMax] = useState(0);
    const [inputText, setInputText] = useState("");
    const [status, setStatus] = useState("all");
    const [todoList, setTodoList] = useState([]);
    const [filteredTodoList, setFilteredTodoList] = useState([]);
    useEffect(() => {
        getStoredTodoList();
    }, []);
    useEffect(() => {
        filterHandler();
        storeTodoList();
    }, [todoList, status]);
    const filterHandler = () => {
        switch (status) {
            case "all":
                setFilteredTodoList(todoList);
                break;
            case "completed":
                setFilteredTodoList(todoList.filter((todo) => todo.completed));
                break;
            case "uncompleted":
                setFilteredTodoList(todoList.filter((todo) => !todo.completed));
                break;
        }
    };
    const storeTodoList = () => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    };
    const getStoredTodoList = () => {
        if (localStorage.getItem("todoList") === null) {
            localStorage.setItem("todoList", JSON.stringify([]));
        }
        else {
        }
    };
    return (React.createElement(ThemeContextProvider, null,
        React.createElement("div", null,
            React.createElement("header", null,
                React.createElement(Navbar, null)),
            React.createElement(Form, { inputText: inputText, setInputText: setInputText, setStatus: setStatus, todoList: todoList, setTodoList: setTodoList, trackIdMax: trackIdMax, setTrackIdMax: setTrackIdMax }),
            React.createElement(TodoList, { todoList: todoList, setTodoList: setTodoList, filteredTodoList: filteredTodoList }))));
};
export default Temp;
//# sourceMappingURL=Temp.js.map