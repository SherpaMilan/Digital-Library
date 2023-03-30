import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { BookTable } from "../../components/book-table/BookTable";
import { getBooksAction } from "./bookAction";

const BookList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { books } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);
  if (user?.role !== "admin") {
    return <h1>Unauthorized</h1>;
  }

  return (
    <AdminLayout>
      <Container>
        <h3 className="mt-5">Book Mgmt</h3>

        <div className="d-flex justify-content-between mt-5">
          <Form.Group>
            <input
              type="text"
              placeholder="search book title"
              className="form-control"
            />
          </Form.Group>

          <Link to="/admin/new">
            <Button variant="primary"> + Add New Book</Button>
          </Link>
        </div>
        <hr />
        <BookTable books={books} />
      </Container>
    </AdminLayout>
  );
};

export default BookList;
