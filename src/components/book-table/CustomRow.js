import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Ratings } from "../ratings/Ratings";
import { useDispatch } from "react-redux";
import { deleteBookActions } from "../../pages/books/bookAction";

export const CustomRow = ({ thumbnail, title, summary, ratings, id }) => {
  const dispatch = useDispatch();
  const handleOnDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this book? This action can not be reversed!"
      )
    ) {
      // process for deleting

      dispatch(deleteBookActions(id));
    }
  };
  return (
    <Row className="border p-2 py-4 rounded shadow-lg mb-3">
      <Col sm={2}>
        <img src={thumbnail} alt="" width="100%" />
      </Col>
      <Col>
        <h4>{title}</h4>
        <p>{summary}...</p>
        <div className="d-flex justify-content-between">
          <Ratings rating={ratings} />
          <Button variant="danger" onClick={handleOnDelete}>
            Delete
          </Button>
        </div>
      </Col>
    </Row>
  );
};
