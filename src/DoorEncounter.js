import React, {useState} from 'react'
import encounter from "./img/encounter.png";

export default function Door() {

    const contentmain ="Test"
    const title= "1: The door"
    const shorttitle= "1"
    const contentadditional="Test2"

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    }
    const [showResults, setShowResults] = React.useState(false)

    const Results = () => (
      <p>{contentadditional}</p>
    )

    return (
        <div class="calender">
            
        <div className={isActive ? "door": "doorOpen"} onClick={handleToggle}>
          <h3 class="door_title">
          <span class="title">{title}</span>
          <span class="shorttitle">{shorttitle}</span>
          </h3>
          <hr class="separation"></hr>
          <img src={encounter} alt="story" class="icons"></img>
        </div>
        <div className={isActive ? "doorContentEmpty": "doorContent"} >
            <p>{contentmain}</p>
            <p class="link" onClick = {() => setShowResults(true)} >Show encounter</p>
            { showResults ? <Results /> : null }
            
        </div>
      </div>
    )
}
