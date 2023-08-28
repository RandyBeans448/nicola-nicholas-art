import React from 'react'
import Picture from './Picture';

export default function Cats() {
    const pictureArray = [
        "./pictures/40.jpg",
        "./pictures/45.jpg",
        "./pictures/64.jpg",
        "./pictures/72.jpg",
      ];
      return pictureArray.map((image, index) => {
        return (
          <div key={index} className="artwork-container">
            <Picture key={index} image={image}/>
          </div>
        );
      });
}
