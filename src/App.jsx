import React from 'react';
import { useState, useEffect } from 'react';
import './assets/main.scss';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

const App = () => {
    const [trackIdMax, setTrackIdMax] = useState(0);
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('all');
    const [todoList, setTodoList] = useState([]);
    const [filteredTodoList, setFilteredTodoList] = useState([]);

    // effects
    // run once on app start
    useEffect(() => {
        getStoredTodoList();
    }, []);

    useEffect(() => {
        filterHandler();
        storeTodoList();
    }, [todoList, status]);

    // functions
    const filterHandler = () => {
        switch (status) {
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

    // local storage
    const storeTodoList = () => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    };

    const getStoredTodoList = () => {
        if (localStorage.getItem('todoList') === null) {
            localStorage.setItem('todoList', JSON.stringify([]));
        } else {
            let getTodoList = JSON.parse(localStorage.getItem('todoList'));
            setTodoList(getTodoList);
        }
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>
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
    );
};

export default App;
