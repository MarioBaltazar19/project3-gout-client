import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function artistsCarousel() {
  return (
    <Carousel bg="dark" className="caroMob">
      <Carousel.Item>
        <Link to={"/events/63878974a4a89677c9785d7c"}>
          <img
            className="d-block w-150"
            src="https://i.ibb.co/d5Y2bX3/circoloco-final.png"
            alt="First slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={"/events/6387bd2003a57db8c2c25d0d"}>
          <img
            className="d-block w-150"
            src="https://i.ibb.co/Z2ZPMPF/1-final.png"
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={"/events/6387bbe403a57db8c2c25ce1"}>
          <img
            className="d-block w-150"
            src="https://i.ibb.co/4pCQJmB/music-final.png"
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default artistsCarousel;
