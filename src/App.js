import React from 'react';
import './assets/main.scss';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    return(
        <h1>
            Todo List
            <div className="todolist-container">
                <Form/>
                <TodoList/>
            </div>
        </h1>
    );
};

export default App;
