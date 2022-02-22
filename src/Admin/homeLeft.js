import React from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeMenu } from "../actions";

const sideBar_items = [
  { Name: "User", Index: 0 },
  { Name: "Projects", Index: 1 },
  { Name: "Experience", Index: 2 },
  { Name: "Education", Index: 3 },
];

const HomeLeft = () => {
  const dispatch = useDispatch();
  const [selectedindex, useSelectedIndex] = useState(0);

  const HandleListItem = (event, index) => {
    //console.log(index);
    useSelectedIndex(index);
    dispatch(changeMenu(index));
  };

  const items = sideBar_items.map((item) => {
    return (
      <ListGroup.Item
        as="li"
        key={item.Index}
        active={selectedindex === item.Index}
        onClick={(event) => {
          HandleListItem(event, item.Index);
        }}
      >
        {item.Name}
      </ListGroup.Item>
    );
  });

  return <ListGroup as="ul">{items}</ListGroup>;
};

export default HomeLeft;
