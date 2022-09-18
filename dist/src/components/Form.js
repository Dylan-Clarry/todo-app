import React from "react";
const Form = ({ inputText, setInputText, setStatus, todoList, setTodoList, trackIdMax, setTrackIdMax, }) => {
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodoList([
            ...todoList,
            { id: trackIdMax, text: inputText, completed: false },
        ]);
        setInputText("");
        setTrackIdMax((curr) => curr + 1);
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (React.createElement("form", { className: "Form" },
        React.createElement("input", { value: inputText, type: "text", className: "form-input", onChange: (e) => setInputText(e.target.value) }),
        React.createElement("button", { type: "submit", className: "form-btn", onClick: submitTodoHandler }, "+"),
        React.createElement("div", { className: "status-select" },
            React.createElement("select", { onChange: statusHandler, name: "todoList", className: "filter-todolist" },
                React.createElement("option", { value: "all" }, "All"),
                React.createElement("option", { value: "completed" }, "Completed"),
                React.createElement("option", { value: "uncompleted" }, "Uncompleted")))));
};
export default Form;
//# sourceMappingURL=Form.js.map