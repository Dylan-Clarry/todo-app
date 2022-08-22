import React from 'react';
import {useState} from 'react';
import './assets/main.scss';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    const [inputText, setInputText] = useState('');
    const [todoList, setTodoList] = useState([]);

    return(
        <h1>
            <div className="todolist-container">
                Todo List
                <Form
                    inputText={inputText}
                    setInputText={setInputText}
                    todoList={todoList}
                    setTodoList={setTodoList}
                />
                <TodoList
                    todoList={todoList}
                />
            </div>
        </h1>
    );
};

export default App;
