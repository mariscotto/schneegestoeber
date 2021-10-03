import React, {useState} from 'react'
import encounter from "./img/encounter.png";

export default function Door() {

    const contentmain ="Test"
    const title= "1: The door"
    const contentadditional="Test2"

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
        <div class="calender">
            
        <div className={isActive ? "door": "doorOpen"} onClick={handleToggle}>
          <h3 class="door_title"><span>{title}</span></h3>
          <hr class="separation"></hr>
          <img src={encounter} alt="story" class="icons"></img>
        </div>
        <div className={isActive ? "doorContentEmpty": "doorContent"} >
            <p>{contentmain}</p>
            <a href=" ">Show encounter</a>
            <p>{contentadditional}</p>
        </div>
      </div>
    )
}
