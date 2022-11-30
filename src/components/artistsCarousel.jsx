import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-router-dom";

function artistsCarousel() {
  return (
    <Carousel bg="dark">
      <Carousel.Item>
      <Link to={"/events/6385f52138493b8378b1ffd6"}>
        <img
          className="d-block w-150"
          src="https://i.ibb.co/d5Y2bX3/circoloco-final.png"
          alt="First slide"
        />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to={"/events/6386239861940381671294d9"}>
        <img
          className="d-block w-150"
          src="https://i.ibb.co/Z2ZPMPF/1-final.png"
          alt="Third slide"
        />
      </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to={"/events/6386219661940381671294c7"}>
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
