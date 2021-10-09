import React, {useState} from 'react'
import item from "./img/item.png"

export default function Door() {

    const contentmain ="Test"
    const title= "1: The door"
    const shorttitle= "1"
    const image="item.png"

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div class="calender">
            
        <div className={isActive ? "door": "doorOpen"} onClick={handleToggle}>
          <h3 class="door_title">
          <span class="title">{title}</span>
          <span class="shorttitle">{shorttitle}</span>
          </h3>
          <hr class="separation"></hr>
          <img src={item} alt="item" class="icons"></img>
        </div>
        <div className={isActive ? "doorContentEmpty": "doorContent"} >
            <p>{contentmain}</p>
            <img src={image} alt="item" class="item"></img>
        </div>
      </div>
    )
}
