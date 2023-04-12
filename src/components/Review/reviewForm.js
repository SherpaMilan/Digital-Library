import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-router-dom";
import { CustomInput } from "../custom-input/CustomInput";

export const reviewForm = () => {
  return (
    <div>
      <Form>
        <CustomInput />

        <div className="d-grid">
          <Button variant="primary"> Submit Review</Button>
        </div>
      </Form>
    </div>
  );
};
