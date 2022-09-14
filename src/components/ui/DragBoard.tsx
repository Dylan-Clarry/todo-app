import React from "react";
import "./DragBoard.style.scss";

const DragBoard = () => {
    return (
        <div className="dragboard">
            <div className="dragboard__container">
                <p className="draggable" draggable="true">
                    1
                </p>
                <p className="draggable" draggable="true">
                    2
                </p>
            </div>
            <div className="dragboard__container">
                <p className="draggable" draggable="true">
                    3
                </p>
                <p className="draggable" draggable="true">
                    5
                </p>
            </div>
        </div>
    );
};

export default DragBoard;
