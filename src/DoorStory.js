import React, { useState, Component, useContext } from "react";
import story from "./img/story.png";
import UserContext from './Counter.js';

const contentadditional1 = "Test1: below or equal to 7";
const contentadditional2 = "Test2: 7-12";
const contentadditional3 = "Test3: 13-17";
const contentadditional4 = "Test4: 18+";

const contentmain = "Test";
const title = "1: The door";
const roll = "Dexterity saving throw";



export default function Door() {
  const [isActive, setActive] = useState("false");
  const [content, setValue] = useState("");
  const [numberrolled, setNumber] = useState("");
  const [inspirationchecked, setInsp] = useState("");
  const [nat20checked, setCheck] = useState("");
  const counter=useContext(UserContext);

  const handleToggle = () => {
    setActive(!isActive);
  };



  function changeContent(roll) {
    if (roll < 7) {
      console.log("bad roll :( " + contentadditional1);
      let contentadditionalrolled = contentadditional1;
      setValue(contentadditionalrolled);
    } else if (roll > 6 && roll < 13) {
      console.log("better role :/ " + contentadditional2);
      let contentadditionalrolled = contentadditional2;
      setValue(contentadditionalrolled);
    } else if (roll > 12 && roll < 18) {
      console.log("good role :) " + contentadditional3);
      let contentadditionalrolled = contentadditional3;
      setValue(contentadditionalrolled);
    } else if (roll > 17) {
      console.log("awesome role :D " + contentadditional4);
      let contentadditionalrolled = contentadditional4;
      setValue(contentadditionalrolled);
    } else {
      return "";
    }
  }

  function decreaseInsp() {

    if (inspirationchecked === true) {
      console.log("descrease insp");
      counter.count = counter.count  - 1;
      console.log("new counter! "+counter.count);
    }
  };


  function increaseInsp() {
    if (nat20checked === true) {
      console.log("increase insp");
      counter.count = counter.count  +1;
      console.log("new counter! "+counter.count);
    }
  }


  return (
    <div class="calender">
      <div className={isActive ? "door" : "doorOpen"} onClick={handleToggle}>
        <h3 class="door_title">
          <span>{title}</span>
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
              onChange={(event) =>
                setNumber(event.target.value)
              }
            />
          </div>
          <div class="rollCheck">
            <input type="checkbox" id="inspiration1" class="checkbox" onChange={(event) =>
                setInsp(!inspirationchecked)}/>
            <label for="inspiration1">Inspiration dice</label>
          </div>
          <div class="rollCheck">
            <input type="checkbox" id="nat201" class="checkbox" onChange={(event) =>
                setCheck(!nat20checked )}/>
            <label for="nat201">Nat 20</label>
          </div>
          <button
            type="button"
            class="rollButton"
            onClick={() => { changeContent(numberrolled);increaseInsp();decreaseInsp()} }
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
