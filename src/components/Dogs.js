import React from 'react'

import Picture from "./Picture";

export default function Dogs() {
    const pictureArray = [
        "./pictures/2.jpg",
        "./pictures/4.jpg",
        "./pictures/5.jpg",
        "./pictures/6.jpg",
        "./pictures/9.jpg",
        "./pictures/10.jpg",
        "./pictures/11.jpg",
        "./pictures/12.jpg",
        "./pictures/13.jpg",
        "./pictures/14.jpg",
        "./pictures/22.jpg",
        "./pictures/23.jpg",
        "./pictures/26.jpg",
        "./pictures/29.jpg",
        "./pictures/31.jpg",
        "./pictures/32.jpg",
        "./pictures/34.jpg",
        "./pictures/41.jpg",
        "./pictures/42.jpg",
        "./pictures/46.jpg",
        "./pictures/48.jpg",
        "./pictures/50.jpg",
        "./pictures/51.jpg",
        "./pictures/53.jpg",
        "./pictures/54.jpg",
        "./pictures/60.jpg",
        "./pictures/63.jpg",
        "./pictures/65.jpg",
        "./pictures/66.jpg",
        "./pictures/68.jpg",
        "./pictures/76.jpg",
      ];
      return pictureArray.map((image, index) => {
        return (
          <div key={index} className="artwork-container">
            <Picture key={index} image={image}/>
          </div>
        );
      });
}
