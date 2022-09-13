import React from "react";
import { useState } from "react";

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
            <div style={{ display: "flex", justifyContent: "center", height: "100%" }}></div>
        </div>
    );
};

export default Home;
