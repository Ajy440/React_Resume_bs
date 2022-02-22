import React from "react";
import Accordon from "./accordon";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import schema from "./formschema";
import FormBody from "./formBody";

const Project = () => {
  const projects = useSelector((state) => state.addproject);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = (data) => {
    console.log(data);
    handleClose();
  };

  const { register, handleSubmit, error } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormBody
            fields={["email", "password"]}
            schema={schema}
            submitHandler={submitHandler}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Alert variant="success">
        <Alert.Heading>Project</Alert.Heading>
        <p>Add your project information</p>
        <Button variant="primary" onClick={handleShow}>
          Add Project
        </Button>
      </Alert>
      <Accordon data={projects} />
    </div>
  );
};

export default Project;
