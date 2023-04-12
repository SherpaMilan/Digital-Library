import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { BookTable } from "../../components/book-table/BookTable";

const BookList = () => {
  const { user } = useSelector((state) => state.user);
  if (user?.role !== "admin") {
    return <h1>Unauthorized</h1>;
  }

  return (
    <AdminLayout>
      <Container>
        <h3 className="mt-5">Book Mgmt</h3>

        <BookTable />
      </Container>
    </AdminLayout>
  );
};

export default BookList;
