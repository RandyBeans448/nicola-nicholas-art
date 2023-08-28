import React from "react";
import Header from "./Header";
export default function Contact() {
  return (
    <div>
        <Header/>
      <div>
      <div className="contact-image-container">
        <img alt="monkeys" className="contact-image" src="./pictures/1.jpg"/>
      </div>
      <div >
        <p className="contact-p">For general enquiries, images of available works, and a price list, email me or contact me at: </p>
      </div>
      <div>
        <p className="contact-p">Email: nicola.nicholas@btinternet.com</p>
        <p className="contact-p">Number: 07712253008</p>
      </div>
      </div>
    </div>
  );
}
