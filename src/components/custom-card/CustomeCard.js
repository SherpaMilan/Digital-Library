import Card from "react-bootstrap/Card";
import "./customeCard.Style.css";

export const CustomeCard = ({ title, img, summary }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>{summary}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};
