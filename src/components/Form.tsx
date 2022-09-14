import React from "react";

const Form = ({
  inputText,
  setInputText,
  setStatus,
  todoList,
  setTodoList,
  trackIdMax,
  setTrackIdMax,
}) => {
  const submitTodoHandler = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: trackIdMax, text: inputText, completed: false },
    ]);
    setInputText("");
    setTrackIdMax((curr: any) => curr + 1);
  };

  const statusHandler = (e: any) => {
    setStatus(e.target.value);
  };

  return (
    <form className="Form">
      <input
        value={inputText}
        type="text"
        className="form-input"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit" className="form-btn" onClick={submitTodoHandler}>
        +
      </button>
      <div className="status-select">
        <select
          onChange={statusHandler}
          name="todoList"
          className="filter-todolist"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
