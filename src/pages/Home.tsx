import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import List from "../components/List";
import "../components/layout/Navbar.style.scss";
import "./Home.style.scss";

const testData = [
  {
    id: 1,
    title: "title 1",
    text: "Test text 1",
  },
  {
    id: 2,
    title: "title 2",
    text: "Test text 2",
  },
  {
    id: 3,
    title: "This iss a title yaya",
    text: "Texas 3",
  },
];

const Home: FC = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home__content">
        <Sidebar />
        <div className="home__board">
          <div className="home__bar">
            <h2>List Title</h2>
            <button>
              <FontAwesomeIcon icon={faGear} />
            </button>
          </div>
          <List entries={testData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
