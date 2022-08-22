import React from 'react';

const Form = ({inputText, setInputText, todoList, setTodoList}) => {

    const submitTodoHandler = e => {
        e.preventDefault();   
        setTodoList([
            ...todoList, {"id": 5, "text": inputText}
        ]);
        setInputText('');
    };

    return(
        <form>
            <input
                value={inputText}
                type="text"
                className="form-input"
                onChange={e => setInputText(e.target.value)}
            />
            <button
                type="submit"
                className="form-btn"
                onClick={submitTodoHandler}
            >+</button>
        </form>
    );
};

export default Form;
