import React, {useState} from 'react'
import story from "./img/story.png";

export default function Door() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
        <div class="calender">
            
        <div className={isActive ? "door": "doorOpen"} onClick={handleToggle}>
          <h3 class="door_title"><span>1: The door</span></h3>
          <hr class="separation"></hr>
          <img src={story} alt="story" class="icons"></img>
        </div>
        <div className={isActive ? "doorContentEmpty": "doorContent"} >
            <p>Test</p>
            <div class="roll">
                <div class="rollDescription">
                <p>Please make a Dexterity saving throw:</p>
                <input type="number"class="rollNumber" min="-5" max="30" step="1"/>
                </div>
               <div class="rollCheck"><input type="checkbox" id="inspiration1" class="checkbox" /><label for="inspiration1">Inspiration dice</label></div> 
               <div class="rollCheck"><input type="checkbox" id="nat201" class="checkbox" /><label for="nat201">Nat 20</label></div> 
               <button type="button" class="rollButton">Enter</button>
            </div>
            <p>Test</p>
        </div>
      </div>
    )
}
