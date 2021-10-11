/* import React, { useState, useContext } from "react";
 */
import React, { useContext } from "react";
import story from "src/img/story.png";
import UserContext from "./Counter.js";
import ChangeContext from "./Change.js";
import a0 from "src/img/0.png";
import a1 from "src/img/1.png";
import a2 from "src/img/2.png";
import a3 from "src/img/3.png";
import a4 from "src/img/4.png";
import a5 from "src/img/5.png";
import a6 from "src/img/6.png";
import a7 from "src/img/7.png";
import a8 from "src/img/8.png";
import a9 from "src/img/9.png";
import a10 from "src/img/10.png";
import a11 from "src/img/11.png";
import a12 from "src/img/12.png";

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

export default function Door(props) {
  const isActivestore = "isActivestore" + props.shorttitle;
  const contentstore = "contentstore" + props.shorttitle;
  const numberrolledstore = "numberrolledstore" + props.shorttitle;
  const inspirationcheckedstore = "inspirationcheckedstore" + props.shorttitle;
  const nat20checkedstore = "nat20checkedstore" + props.shorttitle;

  const [isActive, setActive] = useStickyState(true, isActivestore);
  const [content, setValue] = useStickyState(null, contentstore);
  const [numberrolled, setNumber] = useStickyState(" ", numberrolledstore);
  const [inspirationchecked, setInsp] = useStickyState(
    false,
    inspirationcheckedstore
  );
  const [nat20checked, setCheck] = useStickyState(false, nat20checkedstore);

  const counter = useContext(UserContext);
  const change = useContext(ChangeContext);
  const inspirationid = "inspirationchecked" + props.shorttitle;
  const nat20id = "nat20checked" + props.shorttitle;

  const handleToggle = () => {
    setActive(!isActive);
  };

  React.useEffect(() => {
    let element = document.getElementById(inspirationid);
    if (inspirationchecked === true) {
      element.setAttribute("checked", "");
    } else {
      element.removeAttribute("checked");
    }
  });

  React.useEffect(() => {
    let element = document.getElementById(nat20id);
    if (nat20checked === true) {
      element.setAttribute("checked", "");
    } else {
      element.removeAttribute("checked");
    }
  });

  function identifyimage() {
    const image = document.getElementById("d20");
    if (counter.count > 12) {
      counter.count = 12;
    }
    if (counter.count < 0) {
      counter.count = 0;
    }
    switch (counter.count) {
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

  function changeContent(roll) {
    let contentadditionalrolled;
    if (roll < 7) {
      contentadditionalrolled = props.contentadditional1;
      setValue(contentadditionalrolled);
    } else if (roll > 6 && roll < 13) {
      contentadditionalrolled = props.contentadditional2;
      setValue(contentadditionalrolled);
    } else if (roll > 12 && roll < 18) {
      contentadditionalrolled = props.contentadditional3;
      setValue(contentadditionalrolled);
    } else if (roll > 17) {
      contentadditionalrolled = props.contentadditional4;
      setValue(contentadditionalrolled);
    } else {
      return "";
    }
  }

  function Insp() {
    if (inspirationchecked === true && nat20checked === false) {
      let counterfunction = counter.count - 1;
      if (counterfunction < 0) {
        counterfunction = 0;
        window.confirm(
          'Looks like you do not have enough inspiration dice. "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."'
        );
        setNumber("");
      }
      counter.count = counterfunction;
      console.log("counter.count: " + counter.count);
      identifyimage();
      change.changer = 1;
      console.log("change: " + change.changer);
    }

    if (nat20checked === true && inspirationchecked === false) {
      let counterfunction = counter.count + 1;
      if (counterfunction > 12) {
        counterfunction = 12;
        window.confirm(
          '"The proximity of a desirable thing tempts one to overindulgence". You may not have more than 12 inspiration dice.'
        );
      }
      counter.count = counterfunction;
      console.log("counter.count: " + counter.count);
      identifyimage();
      change.changer = 1;
      console.log("change: " + change.changer);
    }
  }

  return (
    <div className="calender">
      <div className={isActive ? "door" : "doorOpen"} onClick={handleToggle}>
        <h3 className="door_title">
          <span className="title">{props.title}</span>
          <span className="shorttitle">{props.shorttitle}</span>
        </h3>
        <hr className="separation"></hr>
        <img src={story} alt="story" className="icons"></img>
      </div>
      <div className={isActive ? "doorContentEmpty" : "doorContent"}>
        <p>{props.contentmain}</p>
        <div>
          <div className="roll">
            <div className="rollDescription">
              <p>Please make a {props.roll}:</p>
              <input
                type="number"
                className="rollNumber"
                min="-5"
                max="30"
                step="1"
                value={numberrolled}
                onChange={(event) => setNumber(event.target.value)}
              />
            </div>
            <div className="rollCheck">
              <input
                type="checkbox"
                id={inspirationid}
                className="checkbox"
                onClick={() => setInsp(!inspirationchecked)}
              />
              <label htmlFor="inspiration1">Inspiration dice</label>
            </div>
            <div className="rollCheck">
              <input
                type="checkbox"
                id={nat20id}
                className="checkbox"
                onClick={() => setCheck(!nat20checked)}
              />
              <label htmlFor="nat201">Nat 20</label>
            </div>
            <button
              type="button"
              className="rollButton"
              onClick={() => {
                Insp();
                changeContent(numberrolled);
              }}
            >
              Enter
            </button>
          </div>

          <p className="rollresult">{content}</p>
        </div>
      </div>
    </div>
  );
}
