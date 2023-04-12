import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Hero } from "../../components/home/Hero";
import { CustomeCard } from "../../components/custom-card/CustomeCard";
import { Container, Form } from "react-bootstrap";
import { HomeList } from "../../components/home-list/HomeList";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../books/bookAction";

const Home = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);
  const [display, setDisplay] = useState([]);

  console.log(books);
  useEffect(() => {
    setDisplay(books);
    !books.length && dispatch(getBooksAction());
  }, [books]);

  const hanldOnChange = (e) => {
    const { value } = e.target;

    const matchingBooks = books.filter(({ title }) =>
      title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplay(matchingBooks);
  };

  return (
    <DefaultLayout>
      <Hero />
      <Container>
        <div className="card-section mt-5">
          <div className="py-4 d-flex justify-content-between">
            <h3>Browse Library</h3>
            <div className="w-10">
              <Form.Control
                type="text"
                placeholder="Search"
                name=""
                id=""
                onChange={hanldOnChange}
              />
            </div>
          </div>

          <div className="mt-1">{display.length} books found!</div>
          <hr />
          <HomeList display={display} />
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
