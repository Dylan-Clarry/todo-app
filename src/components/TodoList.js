import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList}) => {
    return(
        <ul>
            {todoList.map(todo => (
                <Todo
                    text={todo.text}
                />
            ))}
        </ul>
    );
};

export default TodoList;
