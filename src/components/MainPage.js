import { React, useState } from "react";
import  { NavBar } from "./NavBar";

export default function MainPage() {

    const [open, set] = useState(true)
  
    return (
      <div className="main-page-container">
        <div>
          <NavBar></NavBar>
        </div>
      </div>
    );
  }