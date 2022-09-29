import React, { FC } from "react";
import { IListItem } from "./ListItem";
import ListItem from "./ListItem";

interface IListProps {
  entries: IListItem[];
}

const List: FC<IListProps> = ({ entries }: IListProps) => {
  return (
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
    </div>
  );
};

export default List;
