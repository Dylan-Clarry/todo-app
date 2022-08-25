import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";

const Todo = ({todo, todoList, setTodoList}) => {
    const deleteTodoHandler = () => {
        setTodoList(todoList.filter(el => el.id !== todo.id)) 
    };

    const completedTodoHandler = () => {
        setTodoList(todoList.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !todo.completed
                }
            }
            return item;
        }));
    };

    return(
        <div className="todo-item">
            <li>{todo.text}</li>
            <button onClick={completedTodoHandler}>
                <FontAwesomeIcon icon={faCheck}/>
            </button>
            <button onClick={deleteTodoHandler}>
                    <FontAwesomeIcon icon={faTrash}/>
            </button>
        </div>
    );
};

export default Todo;
