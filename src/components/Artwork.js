import React, { useState } from "react";

import Picture from "./Picture";


export default function Artwork() {


  const pictureArray = [
    "./pictures/1a.jpg",
    "./pictures/1b.jpg",
    "./pictures/1.jpg",
    "./pictures/2.jpg",
    "./pictures/3.jpg",
    "./pictures/15.jpg",
    "./pictures/4.jpg",
    "./pictures/5.jpg",
    "./pictures/6.jpg",
    "./pictures/7.jpg",
    "./pictures/8.jpg",
    "./pictures/9.jpg",
    "./pictures/10.jpg",
    "./pictures/11.jpg",
    "./pictures/12.jpg",
    "./pictures/13.jpg",
    "./pictures/14.jpg",
    "./pictures/16.jpg",
    "./pictures/17.jpg",
    "./pictures/18.jpg",
    "./pictures/19.jpg",
    "./pictures/20.jpg",
    "./pictures/21.jpg",
    "./pictures/22.jpg",
    "./pictures/23.jpg",
    "./pictures/24.jpg",
    "./pictures/25.jpg",
    "./pictures/26.jpg",
    "./pictures/27.jpg",
    "./pictures/28.jpg",
    "./pictures/29.jpg",
    "./pictures/30.jpg",
    "./pictures/31.jpg",
    "./pictures/32.jpg",
    "./pictures/33.jpg",
    "./pictures/34.jpg",
    "./pictures/35.jpg",
    "./pictures/38.jpg",
    "./pictures/39.jpg",
    "./pictures/40.jpg",
    "./pictures/41.jpg",
    "./pictures/42.jpg",
    "./pictures/43.jpg",
    "./pictures/44.jpg",
    "./pictures/45.jpg",
    "./pictures/46.jpg",
    "./pictures/47.jpg",
    "./pictures/48.jpg",
    "./pictures/49.jpg",
    "./pictures/50.jpg",
    "./pictures/51.jpg",
    "./pictures/52.jpg",
    "./pictures/53.jpg",
    "./pictures/54.jpg",
    "./pictures/55.jpg",
    "./pictures/56.jpg",
    "./pictures/57.jpg",
    "./pictures/58.jpg",
    "./pictures/59.jpg",
    "./pictures/50.jpg",
    "./pictures/61.jpg",
    "./pictures/63.jpg",
    "./pictures/64.jpg",
    "./pictures/65.jpg",
    "./pictures/66.jpg",
    "./pictures/67.jpg",
    "./pictures/68.jpg",
    "./pictures/69.jpg",
    "./pictures/70.jpg",
    "./pictures/71.jpg",
    "./pictures/72.jpg",
    "./pictures/73.jpg",
    "./pictures/74.jpg",
    "./pictures/75.jpg",
    "./pictures/76.jpg",
    "./pictures/77.jpg",
    "./pictures/78.jpg",
    "./pictures/80.jpg",
    "./pictures/81.jpg",
    "./pictures/82.jpg",
  ]; 

  return pictureArray.map((image, index) => {
    return (
      <div key={index} className="artwork-container">
        <Picture key={index} image={image}/>
      </div>
    );
  });
}

