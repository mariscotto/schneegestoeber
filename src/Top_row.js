import React, { useContext } from "react";
import minus from "./img/minus.png";
import plus from "./img/plus.png";
import line from "./img/line.png";
import PDF from "./sheet.pdf";
import UserContext from './Counter.js';

export default function Top_row() {

  const counter=useContext(UserContext);

  const imagenumber= counter.count + ".png"
  console.log("top row: "+counter.count)

  console.log(counter.count);

  function onLoad(counter2) {
    if(counter2>12) {
      counter.count=12;
    }
    if(counter2<0) {
      counter.count=0;
    }
    const a1 = counter.count + ".png";
    const image = document.getElementById("d20");
    image.src = a1;
    console.log(image.src);
  }

  function setCounter(countnew) {
    counter.count=countnew;
  }

  return (
    <div className="top_row">
      <div className="inspiration_dice">
        <img
          src={minus}
          alt="minus"
          className="operation"
          onClick={() => { setCounter(counter.count - 1);onLoad(counter.count-1);}}
        ></img>
        <img src={imagenumber} alt="inspiration" className="inspiration" id="d20"></img>
        <img
          src={plus}
          alt="inspiration"
          className="operation"
          onClick={() => {setCounter(counter.count + 1);onLoad(counter.count+1)}}
        ></img>
      </div>
      <div className="character_link">
        <a className="character" href={PDF} target="_blanc">
          character sheet
        </a>
        <img src={line} alt="line" className="line"></img>
      </div>
    </div>
  );
}
