import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CustomRow } from "./CustomRow";

export const BookTable = ({ books }) => {
  console.log(books);
  return (
    <>
      <Row className="fw-bolder">
        <Col>Thumbnail</Col>
        <Col>Details</Col>
      </Row>
      <hr />
      {books?.map((book) => (
        <CustomRow book={book} key={book.id} />
      ))}
    </>
  );
};
