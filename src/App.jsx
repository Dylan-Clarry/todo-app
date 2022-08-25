import React from 'react';
import {useState, useEffect} from 'react';
import './assets/main.scss';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    const [trackIdMax, setTrackIdMax] = useState(0);
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('all');
    const [todoList, setTodoList] = useState([]);
    const [filteredTodoList, setFilteredTodoList] = useState([]);

    // effects
    useEffect(() => {
        filterHandler();
    }, [todoList, status]);

    // functions
    const filterHandler = () => {
        switch(status) {
            case 'all':
                setFilteredTodoList(todoList);
                break;
            case 'completed':
                setFilteredTodoList(todoList.filter(todo => todo.completed));
                break;
            case 'uncompleted':
                setFilteredTodoList(todoList.filter(todo => !todo.completed));
                break;
        }
    }

    return(
        <h1>
            <div className="todolist-container">
                Todo List
                <Form
                    inputText={inputText}
                    setInputText={setInputText}
                    setStatus={setStatus}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    trackIdMax={trackIdMax}
                    setTrackIdMax={setTrackIdMax}
                />
                <TodoList
                    todoList={todoList}
                    setTodoList={setTodoList}
                    filteredTodoList={filteredTodoList}
                />
            </div>
        </h1>
    );
};

export default App;
