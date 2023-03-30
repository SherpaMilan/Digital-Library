import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteBookAction } from "../../pages/books/bookAction";

export const CustomRow = ({ book }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (window.confirm("Please confirm to delete")) {
      dispatch(deleteBookAction(id));
    }
  };

  return (
    <Row className="border p-2 py-4 rounded shadow-lg mb-3">
      <Col sm={2}>
        <img src={book?.thumbnail} alt="" width="100%" />
      </Col>
      <Col>
        <h4>{book?.title}</h4>
        <p>{book?.summary}</p>
        <div className="d-flex justify-content-between">
          <div className="ratings text-warning">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <Button variant="danger" onClick={() => handleDelete(book.id)}>
            Delete
          </Button>
        </div>
      </Col>
    </Row>
  );
};
