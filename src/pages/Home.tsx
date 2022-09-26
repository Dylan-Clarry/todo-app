import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import "../components/layout/Navbar.style.scss";
import "./Home.style.scss";

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

          <div className="todolist">Todolist</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
