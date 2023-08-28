import React from 'react'
import Picture from './Picture';

export default function Wild() {
    const pictureArray = [
        "./pictures/7.jpg",
        "./pictures/8.jpg",
        "./pictures/55.jpg",
        "./pictures/58.jpg",
        "./pictures/73.jpg",
        "./pictures/75.jpg",
        "./pictures/77.jpg",
      ];
      return pictureArray.map((image, index) => {
        return (
          <div key={index} className="artwork-container">
            <Picture key={index} image={image}/>
          </div>
        );
      });
}
