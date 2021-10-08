/* import React, { useState, useContext } from "react";
 */
import React, {useContext} from "react";
import story from "./img/story.png";
import UserContext from "./Counter.js";

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




export default function Door() {
  const [isActive, setActive] = useStickyState(false, "isActivestore");
  const [content, setValue] = useStickyState(null, "contentstore");
  const [numberrolled, setNumber] = useStickyState(" ", "numberrolledstore");
  const [inspirationchecked, setInsp] = useStickyState(false,"inspirationcheckedstore");
  const [nat20checked, setCheck] = useStickyState(false, "nat20checkedstore");

  const [counternumber, setCounter] = useStickyState(1, "counterstore");

  const counter = useContext(UserContext);
  counter.count=counternumber
/*   console.log("logDoor"+counter.count) */

  const handleToggle = () => {
    setActive(!isActive);
  };

  React.useEffect(() => { 
    let element = document.getElementById("inspiration1")
    if (inspirationchecked === true) {
      element.setAttribute("checked","");
    } else {
      element.removeAttribute("checked");
    }
  })

  React.useEffect(() => { 
    let element = document.getElementById("nat201")
    if (nat20checked === true) {
      element.setAttribute("checked","");
    } else {
      element.removeAttribute("checked");
    }
  })


  function changeContent(roll) {
    let contentadditionalrolled;
    if (roll < 7) {
      console.log("bad roll :( " + contentadditional1);
      contentadditionalrolled = contentadditional1;
      setValue(contentadditionalrolled);
    } else if (roll > 6 && roll < 13) {
      console.log("better role :/ " + contentadditional2);
      contentadditionalrolled = contentadditional2;
      setValue(contentadditionalrolled);
    } else if (roll > 12 && roll < 18) {
      console.log("good role :) " + contentadditional3);
      contentadditionalrolled = contentadditional3;
      setValue(contentadditionalrolled);
    } else if (roll > 17) {
      console.log("awesome role :D " + contentadditional4);
      contentadditionalrolled = contentadditional4;
      setValue(contentadditionalrolled);
    } else {
      return "";
    }
  }

  function Insp() {
    if (inspirationchecked === true && nat20checked === false) {
      console.log("descrease insp");
      let counterfunction = counternumber -1
      if (counterfunction < 0) {
        setCounter(0)
        counterfunction=0
        window.confirm("Looks like you do not have enough inspiration dice!");
        setNumber("");
      } else {
        setCounter(counterfunction)
      }
      console.log("new counter! " + counterfunction);
      counter.count=counterfunction
      console.log("countertot: "+counter.count);
      const image = document.getElementById("d20");
      image.src = counter.count + ".png";
    }

    if (nat20checked === true && inspirationchecked === false) {
      console.log("increase insp");
      let counterfunction = counternumber +1
      if (counterfunction> 12) {
        setCounter(12)
        counterfunction = 12
        window.confirm(
          '"The proximity of a desirable thing tempts one to overindulgence". You may not have more than 12 inspiration dice.'
        );
      } else {
        setCounter(counterfunction)
      }
      console.log("new counter! " + counterfunction);
      counter.count=counterfunction
      console.log("countertot: "+counter.count);
      const image = document.getElementById("d20");
      image.src = counter.count + ".png";
    }
  }

  /*   function Welcome(props) {
    React.useEffect(() => {
      // Runs once, after mounting
      console.log("hi");
      var insp = document.getElementById("inspiration1");
      if (inspirationchecked=== false) {
        insp.removeAttribute("checked");
      } else {
        insp.setAttribute("checked", "");
      }
  
      var nat20= document.getElementById("nat201");
      if (nat20checked=== false) {
        nat20.removeAttribute("checked");
      } else {
        nat20.setAttribute("checked", "");
      }
    }, []);
  } */

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
                id="inspiration1"
                className="checkbox"
                onClick={() => setInsp(!inspirationchecked)}
              />
              <label htmlFor="inspiration1">Inspiration dice</label>
            </div>
            <div className="rollCheck">
              <input
                type="checkbox"
                id="nat201"
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
