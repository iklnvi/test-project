import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ListItem: React.FC<any> = ({
  id,
  name,
  description,
  onClick,
  isactive,
}) => {
  return (
    <li className={isactive ? "list-item active" : "list-item"}>
      <div className={"list-item-actions"}>
        <div>
          ID: <b>{id}</b>
        </div>
        <Button onClick={onClick} id={id} disabled={isactive}>
          {isactive ? "Active" : "Set Active"}
        </Button>
      </div>
      <Link to={`/${id}`} className="list-item-body">
        <div>{name}</div>
        <div className={"list-item__description"}>{description}</div>
      </Link>
    </li>
  );
};

export default ListItem;
