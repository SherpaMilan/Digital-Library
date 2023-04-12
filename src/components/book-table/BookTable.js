import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBooksAction } from "../../pages/books/bookAction";
import { CustomRow } from "./CustomRow";
import Pagination from "react-bootstrap/Pagination";
import { PaginationComp } from "../pagination/PaginationComp";

const bookPerPage = 5;
export const BookTable = () => {
  const [display, setDisplay] = useState([]);
  const { books } = useSelector((state) => state.book);
  const [active, setActive] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    !display.length && dispatch(getBooksAction());
    setDisplay(books);
  }, [dispatch, books, display.length]);

  const hanldOnChange = (e) => {
    const { value } = e.target;

    const matchingBooks = books.filter(({ title }) =>
      title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplay(matchingBooks);
  };

  //pagination

  const start = (active - 1) * bookPerPage;
  const end = start + bookPerPage;

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <Form.Group>
          <input
            type="text"
            placeholder="search book title"
            className="form-control"
            onChange={hanldOnChange}
          />
        </Form.Group>

        <Link to="/admin/new">
          <Button variant="primary"> + Add New Book</Button>
        </Link>
      </div>
      <hr />
      <div className="mb-1">{display.length} Books found!</div>

      <Row className="fw-bolder">
        <Col>Thumbnail</Col>
        <Col>Details</Col>
      </Row>
      <hr />
      {display.slice(start, end)?.map((item, i) => (
        <CustomRow key={item.id} {...item} />
      ))}
      <PaginationComp
        setActive={setActive}
        active={active}
        bookPerPage={bookPerPage}
        display={display}
      />
    </>
  );
};
