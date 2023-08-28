import React from 'react'
import Picture from "./Picture";

export default function People() {
    const pictureArray = [
        "./pictures/1b.jpg",
        "./pictures/15.jpg",
        "./pictures/16.jpg",
        "./pictures/20.jpg",
        "./pictures/21.jpg",
        "./pictures/24.jpg",
        "./pictures/25.jpg",
        "./pictures/27.jpg",
        "./pictures/33.jpg",
        "./pictures/39.jpg",
        "./pictures/49.jpg",
        "./pictures/52.jpg",
        "./pictures/59.jpg",
        "./pictures/69.jpg",
        "./pictures/74.jpg",
        "./pictures/77.jpg",
        "./pictures/78.jpg",
        "./pictures/81.jpg",
        "./pictures/82.jpg",
        "./pictures/83.jpg",
      ];
    return pictureArray.map((image, index) => {
        return (
          <div key={index} className="artwork-container">
            <Picture key={index} image={image}/>
          </div>
        );
      });
}
