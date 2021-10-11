import React, { useContext } from "react";
import minus from "./img/minus.png";
import plus from "./img/plus.png";
import line from "./img/line.png";
import PDF from "./sheet.pdf";
import UserContext from "./Counter.js";
import ChangeContext from "./Change.js";
import a0 from "./img/0.png";
import a1 from "./img/1.png";
import a2 from "./img/2.png";
import a3 from "./img/3.png";
import a4 from "./img/4.png";
import a5 from "./img/5.png";
import a6 from "./img/6.png";
import a7 from "./img/7.png";
import a8 from "./img/8.png";
import a9 from "./img/9.png";
import a10 from "./img/10.png";
import a11 from "./img/11.png";
import a12 from "./img/12.png";

export default function Top_row() {
  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const counter = useContext(UserContext);
  const change = useContext(ChangeContext);
  const [counternumber, setCounter] = useStickyState(1, "counterstore");
  counter.count = counternumber;

  React.useEffect(() => {
    if (change.changer === 1) {
      setCounter(counter.count);
    } else {
      counter.count = counternumber;
    }
    identifyimage();
    console.log("counternumber start" + counternumber);
    console.log("counter.count start" + counter.count);
  });

  function onLoad(counter2) {
    if (counter2 > 12) {
      setCounter(12);
    }
    if (counter2 < 0) {
      setCounter(0);
    }
  }

  function identifyimage() {
    const image = document.getElementById("d20");
    if (counternumber > 12) {
      setCounter(12);
    }
    if (counternumber < 0) {
      setCounter(0);
    }
    switch (counternumber) {
      case 0:
        image.src = a0;
        break;
      case 1:
        image.src = a1;
        break;
      case 2:
        image.src = a2;
        break;
      case 3:
        image.src = a3;
        break;
      case 4:
        image.src = a4;
        break;
      case 5:
        image.src = a5;
        break;
      case 6:
        image.src = a6;
        break;
      case 7:
        image.src = a7;
        break;
      case 8:
        image.src = a8;
        break;
      case 9:
        image.src = a9;
        break;
      case 10:
        image.src = a10;
        break;
      case 11:
        image.src = a11;
        break;
      case 12:
        image.src = a12;
        break;
      default:
    }
  }

  function reduce() {
    if (change.changer === 1) {
      counter.count = counter.count - 1;
      setCounter(counter.count);
    } else {
      counter.count = counternumber - 1;
      setCounter(counter.count);
    }
    identifyimage();
    console.log("counter.count" + counter.count);
    console.log("counternumber" + counternumber);
    change.changer = 0;
  }

  function increase() {
    if (change.changer === 1) {
      counter.count = counter.count + 1;
      setCounter(counter.count);
    } else {
      counter.count = counternumber + 1;
      setCounter(counter.count);
    }
    identifyimage();
    console.log("counter.count" + counter.count);
    console.log("counternumber" + counternumber);
    change.changer = 0;
  }

  return (
    <div className="top_row">
      <div className="inspiration_dice">
        <img
          src={minus}
          alt="minus"
          className="operation"
          onClick={() => {
            onLoad(counternumber - 1);
            reduce();
          }}
        ></img>
        <img
          src=""
          alt="inspiration"
          className="inspiration"
          id="d20"
        ></img>
        <img
          src={plus}
          alt="inspiration"
          className="operation"
          onClick={() => {
            onLoad(counternumber + 1);
            increase();
          }}
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
