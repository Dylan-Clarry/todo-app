import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, setTodoList, filteredTodoList }) => {
    return (
        <ul className="Todolist">
            {filteredTodoList.map(todo => (
                <Todo
                    todo={todo}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    key={todo.id}
                />
            ))}
        </ul>
    );
};

export default TodoList;
