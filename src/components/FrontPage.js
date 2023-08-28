import {React, useState} from "react";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";


const image1 = "./pictures/1.jpg";
const image2 = "./pictures/7.jpg";
const image3 = "./pictures/34.jpg";
const image4 = "./pictures/18.jpg";
const image5 = "./pictures/1a.jpg";
const image6 = "./pictures/53.jpg";
const image7 = "./pictures/82.jpg";
const image8 = "./pictures/39.jpg";
const image9 = "./pictures/19.jpg";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#FFFFFF",
    },
  },
});

export default function FrontPage() {

  const [open, set] = useState(true)

  return (
    <div className="front-page-container">

      <div className="front-page-wrapper">
          <h1 className="front-page-title">Nicola Nicholas</h1>
          <Link className="font-page-button" to={"/about"}></Link>
      </div>
    </div>
  );
}

