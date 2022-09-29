import React, { FC, SetStateAction, Dispatch } from "react";
import { useState } from "react";
import ListItem from "./ListItem";
import Form from "./Form";
import { IListItem } from "./ListItem";
import { IBugData } from "../pages/Home";
import "./List.style.scss";

interface IListProps {
  entries: IListItem[];
  setEntries: Dispatch<SetStateAction<IBugData>>;
}

const List: FC<IListProps> = ({ entries, setEntries }: IListProps) => {
  //const [trackIdMax, setTrackIdMax] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");

  return (
    <>
      <Form inputText={inputText} setInputText={setInputText} />
      <div className="list">
        {entries.map((entry) => {
          return (
            <ListItem
              id={entry.id}
              title={entry.title}
              text={entry.text}
              key={entry.id}
            />
          );
        })}
        <div className="listitem create-listitem">
          <h3>
            <b>+</b> Create new issue
          </h3>
        </div>
      </div>
    </>
  );
};

export default List;
