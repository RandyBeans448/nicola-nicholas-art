import React from "react";
import Header from "./Header";

import CarouselConatiner from "./CarouselConatiner";
import Slider from "./Slider";
import { SliderData } from "./SliderData";

export default function About() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
      <div className="">
        <div className="">
          <p className="w-1/2">
            I have always loved art. However working full time on the farm,
            helping to grow hops and vines, put this on the back burner...at
            times farm work just consists of eat sleep work repeat!!! I hadn't
            touched anything arty for many many years but when my faithful
            Border Collie, Belle, died I just had to try and immortalise her in
            a picture. I did ask for help to progress from pencil and it was
            suggested that I should try pastel pencils on pastelmat. I loved it!
            I can go completely bonkers with colours initially then go over and
            over for more and more detail. I also like to use colour pencils as
            well as acrylic paint and even oils but still go back to using
            pastels. Each medium I use I enjoy the different aspects of the way
            they work and am continuously trying new ways such as miniature
            paintings/drawings and also a 10 foot by 4foot mural in my local
            Butchers.
          </p>
        </div>
        <div className="slider-container">
          <Slider slides={SliderData}/>
          
        </div>
       
      </div>
    </div>
    </div>
  );
}