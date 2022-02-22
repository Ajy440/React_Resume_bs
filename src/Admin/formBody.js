import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormBody = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(props.schema),
  });

  const forms = props.fields.map((ele) => {
    return (
      <Form.Group className="mb-3" key={ele}>
        <Form.Label>{ele}</Form.Label>
        <Form.Control
          type={ele}
          placeholder={ele}
          name={ele}
          {...register(ele)}
        />
        <Form.Text className="text-muted">{errors.ele?.message}</Form.Text>
      </Form.Group>
    );
  });

  return (
    <Form onSubmit={handleSubmit(props.submitHandler)}>
      {forms}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormBody;
