import React, { useState, Component } from "react";
import story from "./img/story.png";

const contentadditional1 = "Test1: below or equal to 7";
const contentadditional2 = "Test2: 7-12";
const contentadditional3 = "Test3: 13-17";
const contentadditional4 = "Test4: 18+";

const contentmain = "Test";
const title = "1: The door";
const roll = "Dexterity saving throw";

class Roll extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      numberrolled: "",
    };
  }

  changeContent(roll) {
    if (roll < 7) {
      console.log("bad roll :( " + contentadditional1);
      let contentadditionalrolled = contentadditional1;
      this.setState({
        content: contentadditionalrolled,
      });
    } else if (roll > 6 && roll < 13) {
      console.log("better role :/ " + contentadditional2);
      let contentadditionalrolled = contentadditional2;
      this.setState({
        content: contentadditionalrolled,
      });
    } else if (roll > 12 && roll < 18) {
      console.log("good role :) " + contentadditional3);
      let contentadditionalrolled = contentadditional3;
      this.setState({
        content: contentadditionalrolled,
      });
    } else if (roll > 17) {
      console.log("awesome role :D " + contentadditional4);
      let contentadditionalrolled = contentadditional4;
      this.setState({
        content: contentadditionalrolled,
      });
    } else {
      return "";
    }
  }

  decreaseInsp(inspdice) {
    if (inspdice === true) {
      console.log("descrease insp");
    }
  }

  increaseInsp(nat20) {
    if (nat20 === true) {
      console.log("increase insp");
    }
  }

  render() {
    return (
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
                this.setState({ numberrolled: event.target.value })
              }
            />
          </div>
          <div class="rollCheck">
            <input type="checkbox" id="inspiration1" class="checkbox" />
            <label for="inspiration1">Inspiration dice</label>
          </div>
          <div class="rollCheck">
            <input type="checkbox" id="nat201" class="checkbox" />
            <label for="nat201">Nat 20</label>
          </div>
          <button
            type="button"
            class="rollButton"
            onClick={() => {
              this.changeContent(this.state.numberrolled);
              this.increaseInsp(true);
              this.decreaseInsp(true);
            }}
          >
            Enter
          </button>
        </div>

        <p class="rollresult">{this.state.content}</p>
      </div>
    );
  }
}

export default function Door() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
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
        <Roll />
      </div>
    </div>
  );
}