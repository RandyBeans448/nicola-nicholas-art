import React from 'react'
import Picture from './Picture';

export default function Mural() {
    const pictureArray = [
        "./pictures/mural.jpg",
      ];
      return pictureArray.map((image, index) => {
        return (
          <div key={index} className="artwork-container">
            <Picture key={index} image={image}/>
          </div>
        );
      });
}