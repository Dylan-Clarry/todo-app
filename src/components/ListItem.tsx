import React, { FC, SetStateAction, Dispatch } from "react";
import "./ListItem.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { IBugData } from "../pages/Home";

export interface IListItem {
  entry: IBugData;
  key: number;
}

interface IListItemProp {
  entry: IBugData;
  entries: IBugData[];
  setEntries: Dispatch<SetStateAction<IBugData[]>>;
}

const ListItem: FC<IListItemProp> = ({
  entry,
  entries,
  setEntries,
}: IListItemProp) => {
  const handleClosedItem = () => {};

  const handleDeleteItem = () => {
    setEntries(entries.filter((el: IBugData) => el.id !== entry.id));
  };

  return (
    <div className="listitem">
      <div className="listitem__content">
        <h2>{entry.title}</h2>
        <p>{entry.text}</p>
      </div>
      <div className="listitem__buttons">
        <button onClick={handleClosedItem}>
          <FontAwesomeIcon icon={entry.closed ? faX : faCheck} />
        </button>
        <button onClick={handleDeleteItem}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
