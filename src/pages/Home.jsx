import React from "react";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
//import { v4 as uuid } from "uuid";

const itemsFromBackend = [
  { id: "1", content: "First task" },
  { id: "2", content: "Second task" },
];

const columnsFromBackend = {
  ["1"]: {
    name: "Todo",
    items: itemsFromBackend,
  },
};

const Home = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className="Home">
      <h1>Home</h1>
      <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
        <DragDropContext onDropEnd={(result) => console.log(result)}>
          {Object.entries(columns).map(([id, column]) => {
            return (
              <Droppable droppableId={id}>
                {(provided, snapshot) => {
                  console.log("droppableId", id);
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                        padding: 4,
                        width: 250,
                        minHeight: 500,
                      }}
                    >
                      {column.items.map((item, index) => {
                        return (
                          <Draggable key={item.id} draggableId={"1"} index={index}>
                            {(provided, snapshot) => {
                              console.log("draggableId", item.id);
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: "none",
                                    padding: 16,
                                    margin: "0 0 8px 0",
                                    minHeight: "50px",
                                    backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                                    color: "white",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  {item.content}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                    </div>
                  );
                }}
              </Droppable>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Home;
