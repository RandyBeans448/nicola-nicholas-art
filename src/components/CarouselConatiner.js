import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselConatiner() {

  
  return (
    <div className="carousel-container">
      <Carousel className="carousel" autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} showThumbs={false} centerMode={true} centerSlidePercentage={100}>
        <div>
          <img  src="./pictures/1.jpg" />
        </div>
        <div>
          <img  src="./pictures/Tucking in Team 2020.jpg" />
        </div>
        <div className="image-bell">
          <img  src="./pictures/66.jpg" />
        </div>
        <div className="image-two">
          <img  src="./pictures/3.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
