import "./App.css";

import Gallery from "./components/Gallery";
import FrontPage from "./components/FrontPage";
import About from "./components/About";
import Contact from "./components/Contact";

import { HashRouter as Router, Route, Switch, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
          <Routes>
          {/* <Route exact path='/' element={<MainPage/>}/> */}
          {/* <Route exact path='/about' element={<About/>}></Route> */}
          <Route exact path='/gallery' element={<Gallery/>}></Route>
          {/* <Route exact path='/contact' element={<Contact/>}></Route> */}
      </Routes>
    </Router>

  );
}

export default App;
