import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Container, Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { addBookAction } from "./bookAction";
import { Link } from "react-router-dom";

const initialState = {
  thumbnail: "",
  title: "",
  summary: "",
  ratings: "",
  author: "",
  published: "",
  available: true,
  availableFrom: Date(),
};
const NewBooks = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const { user } = useSelector((state) => state.user);
  if (user?.role !== "admin") {
    return <h1>Unauthorized</h1>;
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addBookAction(form));
  };

  const inputs = [
    {
      name: "title",
      type: "text",
      placeholder: "Book title",
      label: "Book Name",
      required: true,
    },
    {
      name: "author",
      type: "text",
      placeholder: "Auther name",
      label: "Author",
      required: true,
    },
    {
      name: "published",
      type: "number",
      label: "Published Year",
      placeholder: 2000,
      required: true,
    },
    {
      name: "ratings",
      type: "number",
      label: "Ratings",
      min: "1",
      max: "5",
      required: true,
    },
    {
      name: "thumbnail",
      type: "url",
      placeholder: "http://....",
      label: "Image",
      required: true,
    },
    {
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "Book Summary",
      label: "Book Summary",
      rows: "5",
      required: true,
    },
  ];

  return (
    <AdminLayout>
      <Container>
        <Form
          onSubmit={handleOnSubmit}
          className="w-75 m-auto border rounded p-2 mt-5"
        >
          <Link to="/admin/books">
            <Button variant="secondary"> &lt; Back </Button>
          </Link>
          <h4 className="mt-4">Add New book </h4>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <div className="py-3 d-grid">
            <Button type="submit" variant="primary">
              Submit New Book
            </Button>
          </div>
        </Form>
      </Container>
    </AdminLayout>
  );
};

export default NewBooks;
