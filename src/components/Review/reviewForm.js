import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { addReviewsAction } from "../../pages/books/bookAction";

export const ReviewForm = ({ selectedId }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const { user } = useSelector((state) => state.user);

  //get from datat onChante

  const handleOnChanee = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // submit reviews on form submition with selectedId
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const obj = {
      ...form,
      ...selectedId,
      userId: user.uid,
      userName: user.name,
    };
    //
    dispatch(addReviewsAction(obj));
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          onChange={handleOnChanee}
          label="Ratings"
          name="rating"
          required
          min="1"
          max="5"
          type="number"
        />
        <CustomInput
          onChange={handleOnChanee}
          label="Review"
          name="review"
          required
          as="textarea"
          rows="5"
        />

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit Review
          </Button>
        </div>
      </Form>
    </div>
  );
};
