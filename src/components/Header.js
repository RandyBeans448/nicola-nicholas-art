import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const [about, setAbout] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [contact, setContact] = useState(false);

  const handleClick = (navigation) => {
    console.log(navigation)
    if (navigation === "gallery") {
      setGallery(true);
      setAbout(false);
      setContact(false);
    }

    if (navigation === "contact") {
      setAbout(false);
      setGallery(false);
      setContact(true);
    }

    if (navigation === "about") {
      setAbout(true);
      setGallery(false);
      setContact(false);
    }
  };

  return (
    <div>
      <ul className="header-list-wrapper">
        <li className="header-list-item">
          <h1 className="header-h1">Nicola Nicholas</h1>
        </li>
        <div>
        <li className="header-list-item">
          <div className="header-border"/> 
        </li>
        <li className="header-list-item">
          <Link
            to={"/about"}
            className={about ? "header-link-active" : "header-link"}
            onClick={() => handleClick("about")}
          >
            ABOUT
          </Link>
        </li>
        <li className="header-list-item">
          <Link
            to={"/gallery"}
            className={gallery ? "header-link-active" : "header-link"}
            onClick={() => handleClick("gallery")}
          >
            GALLERY
          </Link>
        </li>
        <li className="header-list-item">
          <Link
            to={"/contact"}
            className={contact ? "header-link-active" : "header-link"}
            onClick={() => handleClick("contact")}
          >
            CONTACT
          </Link>
        </li>
        <li className="header-list-item">
          <div className="header-border"/> 
        </li>
        </div>
      </ul>
    </div>
  );
}
