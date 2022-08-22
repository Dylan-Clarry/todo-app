import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";

const Todo = ({text}) => {
    return(
        <div className="todo-item">
            <li>{text}</li>
            <button>
                <FontAwesomeIcon icon={faCheck}/>
            </button>
            <button>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        </div>
    );
};

export default Todo;
