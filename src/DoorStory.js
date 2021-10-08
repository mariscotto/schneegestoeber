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
  const [numberrolled, setNumber] = useStickyState(null, "numberrolledstore");
  const [inspirationchecked, setInsp] = useStickyState(false,"inspirationcheckedstore");
  const [nat20checked, setCheck] = useStickyState(false, "nat20checkedstore");
  const [counter2, setCounter] = useStickyState(1, "counterstore");

  const counter = useContext(UserContext);

  const handleToggle = () => {
    setActive(!isActive);
  };

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

  function decreaseInsp() {
    if (inspirationchecked === true) {
      console.log("descrease insp");
      counter.count = counter.count - 1;
      if (counter.count > 12) {
        counter.count = 12;
      }
      if (counter.count < 0) {
        counter.count = 0;
        window.confirm("Looks like you do not have enough inspiration dice!");
        setNumber("");
      }
      console.log("new counter! " + counter.count);
      const a1 = counter.count + ".png";
      const image = document.getElementById("d20");
      image.src = a1;
    }
  }

  function increaseInsp() {
    if (nat20checked === true) {
      console.log("increase insp");
      counter.count = counter.count + 1;
      if (counter.count > 12) {
        counter.count = 12;
        window.confirm(
          '"The proximity of a desirable thing tempts one to overindulgence". You may not have more than 12 inspiration dice.'
        );
      }
      if (counter.count < 0) {
        counter.count = 0;
      }
      console.log("new counter! " + counter.count);
      const a1 = counter.count + ".png";
      const image = document.getElementById("d20");
      image.src = a1;
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
    <div class="calender">
      <div className={isActive ? "door" : "doorOpen"} onClick={handleToggle}>
        <h3 class="door_title">
          <span class="title">{title}</span>
          <span class="shorttitle">{shorttitle}</span>
        </h3>
        <hr class="separation"></hr>
        <img src={story} alt="story" class="icons"></img>
      </div>
      <div className={isActive ? "doorContentEmpty" : "doorContent"}>
        <p>{contentmain}</p>
        <div>
          <div class="roll">
            <div class="rollDescription">
              <p>Please make a {roll}:</p>
              <input
                type="number"
                class="rollNumber"
                min="-5"
                max="30"
                step="1"
                value={numberrolled}
                onChange={(event) => setNumber(event.target.value)}
              />
            </div>
            <div class="rollCheck">
              <input
                type="checkbox"
                id="inspiration1"
                class="checkbox"
/*                 onChange={(event) => setInsp(!inspirationchecked)} */
              />
              <label for="inspiration1">Inspiration dice</label>
            </div>
            <div class="rollCheck">
              <input
                type="checkbox"
                id="nat201"
                class="checkbox"
/*                 onChange={(event) => setCheck(!nat20checked)} */
              />
              <label for="nat201">Nat 20</label>
            </div>
            <button
              type="button"
              class="rollButton"
              onClick={() => {
                increaseInsp();
                decreaseInsp();
                changeContent(numberrolled);
              }}
            >
              Enter
            </button>
          </div>

          <p class="rollresult">{content}</p>
        </div>
      </div>
    </div>
  );
}
