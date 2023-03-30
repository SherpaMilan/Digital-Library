import Carousel from "react-bootstrap/Carousel";
import l1 from "../../assets/l1.jpg";
import l2 from "../../assets/l2.jpg";
import l3 from "../../assets/l3.jpg";

export const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={l1} alt="First slide" />
        <Carousel.Caption>
          <div className="hero-main-img">
            <h2>Welcome to Digital Library</h2>
            <p>
              The unique library offers the latest tech and personal development
              books
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={l2} alt="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={l3} alt="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
