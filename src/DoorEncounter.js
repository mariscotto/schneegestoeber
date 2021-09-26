import React, {useState} from 'react'
import encounter from "./img/encounter.png";

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
          <img src={encounter} alt="story" class="icons"></img>
        </div>
        <div className={isActive ? "doorContentEmpty": "doorContent"} >
            <p>Test</p>
            <a>Show encounter</a>
            <p>Test</p>
        </div>
      </div>
    )
}
