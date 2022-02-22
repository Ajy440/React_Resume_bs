import React from "react";
import { Accordion } from "react-bootstrap";

const accordon = (props) => {
  const data = props.data.map((data) => {
    var res = "";
    for (var d1 in data) {
      res += d1 + " : " + data[d1] + "\n\n";
    }

    return (
      <Accordion.Item eventKey={data.id} key={data.id}>
        <Accordion.Header>{data.name}</Accordion.Header>
        <Accordion.Body>{res}</Accordion.Body>
      </Accordion.Item>
    );
  });

  return <Accordion>{data}</Accordion>;
};

export default accordon;
