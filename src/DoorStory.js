/* import React, { useState, useContext } from "react";
 */
import React, {useContext} from "react";
import story from "./img/story.png";
import UserContext from "./Counter.js";
import ChangeContext from './Change.js';

const contentadditional1 = "Test1: below or equal to 7";
const contentadditional2 = "Test2: 7-12";
const contentadditional3 = "Test3: 13-17";
const contentadditional4 = "Test4: 18+";

const contentmain = "Test";
const title = "1: The door";
const shorttitle = "1";
const roll = "Dexterity saving throw";

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

const isActivestore = "isActivestore"+shorttitle
const contentstore = "contentstore"+shorttitle
const numberrolledstore = "numberrolledstore"+shorttitle
const inspirationcheckedstore = "inspirationcheckedstore"+shorttitle
const nat20checkedstore = "nat20checkedstore"+shorttitle


export default function Door() {
  const [isActive, setActive] = useStickyState(true, isActivestore);
  const [content, setValue] = useStickyState(null, contentstore);
  const [numberrolled, setNumber] = useStickyState(" ", numberrolledstore);
  const [inspirationchecked, setInsp] = useStickyState(false,inspirationcheckedstore);
  const [nat20checked, setCheck] = useStickyState(false, nat20checkedstore);



  const counter = useContext(UserContext)
  const change = useContext(ChangeContext)
  const inspirationid="inspirationchecked"+shorttitle
  const nat20id="nat20checked"+shorttitle

  const handleToggle = () => {
    setActive(!isActive);
  };

  React.useEffect(() => { 
    let element = document.getElementById(inspirationid)
    if (inspirationchecked === true) {
      element.setAttribute("checked","");
    } else {
      element.removeAttribute("checked");
    }
  })

  React.useEffect(() => { 
    let element = document.getElementById(nat20id)
    if (nat20checked === true) {
      element.setAttribute("checked","");
    } else {
      element.removeAttribute("checked");
    }
  })


  function changeContent(roll) {
    let contentadditionalrolled;
    if (roll < 7) {
/*       console.log("bad roll :( " + contentadditional1); */
      contentadditionalrolled = contentadditional1;
      setValue(contentadditionalrolled);
    } else if (roll > 6 && roll < 13) {
/*       console.log("better role :/ " + contentadditional2); */
      contentadditionalrolled = contentadditional2;
      setValue(contentadditionalrolled);
    } else if (roll > 12 && roll < 18) {
/*       console.log("good role :) " + contentadditional3); */
      contentadditionalrolled = contentadditional3;
      setValue(contentadditionalrolled);
    } else if (roll > 17) {
/*       console.log("awesome role :D " + contentadditional4); */
      contentadditionalrolled = contentadditional4;
      setValue(contentadditionalrolled);
    } else {
      return "";
    }
  }

  function Insp() {
    if (inspirationchecked === true && nat20checked === false) {
      let counterfunction = counter.count -1
      if (counterfunction < 0) {
        counterfunction=0
        window.confirm("Looks like you do not have enough inspiration dice!");
        setNumber("");
      }
      counter.count=counterfunction
      console.log("counter.count: "+counter.count);
      const image = document.getElementById("d20");
      image.src = counter.count + ".png";
      change.changer = 1
      console.log("change: "+change.changer);
    }

    if (nat20checked === true && inspirationchecked === false) {
      let counterfunction = counter.count +1
      if (counterfunction> 12) {
        counterfunction = 12
        window.confirm(
          '"The proximity of a desirable thing tempts one to overindulgence". You may not have more than 12 inspiration dice.'
        );
      }
      counter.count=counterfunction
      console.log("counter.count: "+counter.count);
      const image = document.getElementById("d20");
      image.src = counter.count + ".png";
      change.changer = 1
      console.log("change: "+change.changer);
    }
  }


  return (
    <div className="calender">
      <div className={isActive ? "door" : "doorOpen"} onClick={handleToggle}>
        <h3 className="door_title">
          <span className="title">{title}</span>
          <span className="shorttitle">{shorttitle}</span>
        </h3>
        <hr className="separation"></hr>
        <img src={story} alt="story" className="icons"></img>
      </div>
      <div className={isActive ? "doorContentEmpty" : "doorContent"}>
        <p>{contentmain}</p>
        <div>
          <div className="roll">
            <div className="rollDescription">
              <p>Please make a {roll}:</p>
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
                onClick={() => setCheck(!nat20checked)
              }
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
