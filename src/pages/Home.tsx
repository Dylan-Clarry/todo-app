import React, { FC } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import List from "../components/List";
import "../components/layout/Navbar.style.scss";
import "./Home.style.scss";

export interface IBugData {
  id: number;
  title: string;
  text: string;
  closed: boolean;
}

const testData: IBugData[] = [
  {
    id: 1,
    title: "title 1",
    text: "Test text 1",
    closed: false,
  },
  {
    id: 2,
    title: "title 2",
    text: "Test text 2",
    closed: false,
  },
  {
    id: 3,
    title: "This iss a title yaya",
    text: "Texas 3",
    closed: false,
  },
];

const Home: FC = () => {
  const [status, setStatus] = useState<string>("all");
  const [entries, setEntries] = useState<IBugData[]>(testData);
  const [trackIdMax, setTrackIdMax] = useState<number>(0);
  //const [filteredTodoList, setFilteredTodoList] = useState<any[]>([]);

  console.log(status);

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
          <List
            entries={entries}
            setEntries={setEntries}
            setStatus={setStatus}
            trackIdMax={trackIdMax}
            setTrackIdMax={setTrackIdMax}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
