import React from "react";
import { useState } from "react";

import Header from "./Header";
import Dogs from "./Dogs";
import People from "./People";
import Horses from "./Horses";
import National from "./National";
import Wild from "./Wild";
import Farm from "./Farm"
import Cats from "./Cats"
import Acrylics from "./Acrylics";
import Mural from "./Mural";
import { NavBar } from "./NavBar";



export default function Galley() {


  const [ national, setNational ] = useState(false);
  const [ dogs, setDogs ] = useState(true);
  const [ portrait, setPortrait ] = useState(false);
  const [ wildAnimals, setWildAnimals ] = useState(false);
  const [ horses, setHorses ] = useState(false);
  const [ farm, setFarm ] = useState(false)
  const [ cats, setCats] = useState(false);
  const [ acrylics, setAcrylics] = useState(false);
  const [ mural, setMural] = useState(false);

  const handleClick = (gallery) => {

    if (gallery === "dogs") {
      setDogs(true);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "portrait") {
      setDogs(false);
      setPortrait(true);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "horses") {
      setDogs(false);
      setPortrait(false);
      setHorses(true);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "national") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(true);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "wild") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(true);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "farm") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(true);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "cats") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(true);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "acrylics") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(true);
      setMural(false);
    }

    if (gallery === "mural") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(true);
    }

  }


  return (
    <div>

      <NavBar />

      <div className="gallery-wrapper"> 
         
        <div className="button-wrapper">

          <div class="">
            <input class="btn btn-xs m2 font-extralight bg-white border border-hidden" type="radio" name="options" aria-label="Exhibitions"  onClick={() => handleClick("exhibitions")}/>
            <input class="btn btn-xs m2 font-extralight bg-white border border-hidden" type="radio" name="options" aria-label="Dogs"  onClick={() => handleClick("dogs")}/>
            <input class="btn btn-xs m2 font-extralight bg-white border border-hidden" type="radio" name="options" aria-label="Portrait"  onClick={() => handleClick("portrait")}/>
            <input class="btn btn-xs m2 font-extralight bg-white border border-hidden" type="radio" name="options" aria-label="Wild animals"  onClick={() => handleClick("wild")}/>
            <input class="btn btn-xs m2 font-extralight bg-white border border-hidden" type="radio" name="options" aria-label="Horses"  onClick={() => handleClick("horses")}/>
            <input class="btn btn-xs m2 font-extralight bg-white border border-hidden" type="radio" name="options" aria-label="Farm"  onClick={() => handleClick("farm")}/>
            <input class="btn btn-xs m2 font-extralight bg-white border border-hidden" type="radio" name="options" aria-label="Cats"  onClick={() => handleClick("cats")}/>
            <input class="btn btn-xs m2 font-extralight bg-white border border-hidden" type="radio" name="options" aria-label="Acrylics" onClick={() => handleClick("acrylics")}/>
            <input class="btn btn-xs m2 font-extralight bg-white border border-hidden" type="radio" name="options" aria-label="Mural" onClick={() => handleClick("mural")} />
          </div>

        </div>

        <div >
          <div className="grid grid-cols-5 gap-4">
            {dogs === false ? (null) : (<Dogs/>)}  
            {portrait === false ? (null) : (<People/>)}
            {horses === false ? (null) : (<Horses/>)}
            {national === false ? (null) : (<National/>)}
            {wildAnimals === false ? (null) : (<Wild/>)}           
            {farm === false ? (null) : (<Farm/>)}
            {cats === false ? (null) : (<Cats/>)}
            {acrylics === false ? (null) : (<Acrylics/>)}        
            {mural === false ? (null) : (<Mural/>)}
          </div>
        </div>

      </div>


    </div>

  );
}

