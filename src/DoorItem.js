import React, {useState} from 'react'
import item from "./img/item.png";

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
          <img src={item} alt="item" class="icons"></img>
        </div>
        <div className={isActive ? "doorContentEmpty": "doorContent"} >
            <p>Test</p>
            <img src={item} alt="item" class="item"></img>
        </div>
      </div>
    )
}
