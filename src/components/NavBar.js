import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function NavBar() {

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
        
        <div className="nav-bar-container">

            <div className="">
                <h1 className="nicola-nicholas text-2xl">Nicola Nicholas</h1>
            </div>

        <div>
            {/* <ul className="menu menu-horizontal">
                <li className="list-item">
                    <Link to={"/about"} style={{ textDecoration: 'none' }} className={about} onClick={() => handleClick("about")}>
                        ABOUT
                    </Link>
                </li>

                <li className="list-item">
                <Link to={"/gallery"} style={{ textDecoration: 'none' }} className={gallery} onClick={() => handleClick("gallery")}>
                       GALLERY
                </Link>
                </li>

                <li className="list-item">
                <Link to={"/contact"} style={{ textDecoration: 'none' }} className={contact} onClick={() => handleClick("contact")}>
                      CONTACT
                </Link>
                </li>
            </ul> */}
        </div> 

    </div>

    )

}