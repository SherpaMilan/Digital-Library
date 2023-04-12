import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Ratings } from "../ratings/Ratings";
import "./customeCard.Style.css";
import { setSelectedBook } from "../../pages/books/bookSlice";
import { useNavigate } from "react-router-dom";

export const CustomeCard = ({ id, title, thumbnail, summary, ratings }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnClick = () => {
    dispatch(setSelectedBook(id));
    navigate("/book/" + title);
  };

  return (
    <Card style={{ width: "18rem" }} className="" onClick={handleOnClick}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
        <Ratings rating={ratings} />
      </Card.Body>
    </Card>
  );
};
