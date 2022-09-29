import React, { FC } from "react";
import "./ListItem.style.scss";

export interface IListItem {
  title: string;
  text: string;
  id: number;
}

const ListItem: FC<IListItem> = ({ title, text }: IListItem) => {
  return (
    <div className="listitem">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default ListItem;
