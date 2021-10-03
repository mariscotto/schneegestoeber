import React, { useState } from "react";
import minus from "./img/minus.png";
import plus from "./img/plus.png";
import line from "./img/line.png";
import PDF from "./sheet.pdf";

export default function Top_row() {
  const [counter, setCounter] = useState(1);
  if (counter < 0) {
    setCounter(0);
  }

  if (counter > 12) {
    setCounter(12);
  }
  console.log(counter);

  function onLoad(counter) {
    if(counter===13) {
      counter=12;
    }
    if(counter===-1) {
      counter=0;
    }
    const a1 = counter + ".png";
    const image = document.getElementById("d20");
    image.src = a1;
    console.log(image.src);
  }

  return (
    <div class="top_row">
      <div class="inspiration_dice">
        <img
          src={minus}
          alt="minus"
          class="operation"
          onClick={() => { setCounter(counter - 1);onLoad(counter-1);}}
        ></img>
        <img src="1.png" alt="inspiration" class="inspiration" id="d20"></img>
        <img
          src={plus}
          alt="inspiration"
          class="operation"
          onClick={() => {setCounter(counter + 1);onLoad(counter+1)}}
        ></img>
      </div>
      <div class="character_link">
        <a class="character" href={PDF} target="_blanc">
          character sheet
        </a>
        <img src={line} alt="line" class="line"></img>
      </div>
    </div>
  );
}
