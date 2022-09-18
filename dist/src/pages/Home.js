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
    const filler = () => {
        let isTrue = false;
        if (isTrue) {
            setColumns(columns);
        }
    };
    filler();
    return (React.createElement("div", { className: "Home" },
        React.createElement("h1", null, "Home"),
        React.createElement("div", { style: { display: "flex", justifyContent: "center", height: "100%" } })));
};
export default Home;
//# sourceMappingURL=Home.js.map