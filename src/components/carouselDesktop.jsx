import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function carouselDesktop() {
  return (
    <Carousel bg="dark" className="caroDesck">
      <Carousel.Item>
        <Link to={"/events/63878974a4a89677c9785d7c"}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/cx7ZLC2/couch-good.png"
            alt="First slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={"/events/6387bd2003a57db8c2c25d0d"}>
          <img
            className="d-block w-100"
            src="https://www.oxigenio.fm/wp-content/uploads/2019/03/bpm-festival-1280x720.jpg"
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={"/events/6387bbe403a57db8c2c25ce1"}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/w4dFjLp/rl-site-good.png"
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default carouselDesktop;