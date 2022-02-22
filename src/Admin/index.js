import React from "react";
import HomeCenter from "./homeCenter";
import HomeLeft from "./homeLeft";
import { Container, Row, Col, Button } from "react-bootstrap";

const index = () => {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row style={{ height: "5vh" }}>
        <h3>Hi Kira</h3>
      </Row>
      <Row>
        <Col sm={2} style={{ height: "95vh" }}>
          <HomeLeft />
        </Col>
        <Col sm={7} style={{ height: "95vh" }} className="">
          <HomeCenter />
        </Col>
        <Col sm={3} style={{ height: "95vh" }} className="bg-primary">
          b
        </Col>
      </Row>
    </Container>
  );
};

export default index;
