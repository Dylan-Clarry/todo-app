import React, { FC, SetStateAction, Dispatch } from "react";
import { useState } from "react";
import ListItem from "./ListItem";
import Form from "./Form";
import { IBugData } from "../pages/Home";
import "./List.style.scss";

interface IListProps {
  entries: IBugData[];
  setEntries: Dispatch<SetStateAction<IBugData[]>>;
  setStatus: Dispatch<SetStateAction<string>>;
  trackIdMax: number;
  setTrackIdMax: Dispatch<SetStateAction<number>>;
}

const List: FC<IListProps> = ({
  entries,
  setEntries,
  setStatus,
  trackIdMax,
  setTrackIdMax,
}: IListProps) => {
  //const [trackIdMax, setTrackIdMax] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");

  const testEntry: IBugData = {
    id: 69,
    title: "Test",
    text: "This is a test, and you failed the test!",
    closed: false,
  };

  const handleNewEntry = () => {
    setEntries([...entries, testEntry]);
  };

  return (
    <>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        entries={entries}
        setEntries={setEntries}
        trackIdMax={trackIdMax}
        setTrackIdMax={setTrackIdMax}
      />
      <div className="list">
        {entries.map((entry) => {
          return (
            <ListItem entry={entry} entries={entries} setEntries={setEntries} />
          );
        })}
        <div onClick={handleNewEntry} className="listitem create-listitem">
          <h3>
            <b>+</b> Create new issue
          </h3>
        </div>
      </div>
    </>
  );
};

export default List;
