import React from "react";
import "./DragBoard.style.scss";

const DragContainer = (props: any) => {
  const handleDragOver = (e: any) => {
    console.log("dragoon", e.target);
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    e.target.appendChild(draggable);
  };

  return (
    <div className="dragboard__container" onDragOver={handleDragOver}>
      {props.children}
    </div>
  );
};

const Draggable = (props: any) => {
  const handleDragStart = (e: any) => {
    e.target.classList.add("dragging");
  };

  const handleDragEnd = (e: any) => {
    e.target.classList.remove("dragging");
  };

  return (
    <p
      className="draggable"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {props.children}
    </p>
  );
};

const DragBoard = () => {
  return (
    <div className="dragboard">
      <DragContainer>
        <Draggable>1</Draggable>
        <Draggable>2</Draggable>
      </DragContainer>
      <DragContainer>
        <Draggable>3</Draggable>
        <Draggable>4</Draggable>
      </DragContainer>
    </div>
  );
};

export default DragBoard;
