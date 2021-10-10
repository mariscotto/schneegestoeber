import React, { Component } from "react";
import doors from "./doorconfig/doors.json";
import DoorStory from "./DoorStory.js";
import DoorItem from "./DoorItem.js";
import DoorEncounter from "./DoorEncounter.js";

var today = new Date(),
  date = today.getDate();

class Calender extends Component {
  render() {
    var list = doors.slice(0, date).map((door, index) => {
      return door.doorType === 1 ? (
        <DoorStory
          key={index}
          title={door.title}
          shorttitle={door.shorttitle}
          contentmain={door.contentmain}
          roll={door.roll}
          contentadditional1={door.contentadditional1}
          contentadditional2={door.contentadditional2}
          contentadditional3={door.contentadditional3}
          contentadditional4={door.contentadditional4}
        />
      ) : door.doorType === 2 ? (
        <DoorItem
          key={index}
          title={door.title}
          shorttitle={door.shorttitle}
          contentmain={door.contentmain}
          image={door.image}
        />
      ) : door.doorType === 3 ? (
        <DoorEncounter
          key={index}
          title={door.title}
          shorttitle={door.shorttitle}
          contentmain={door.contentmain}
          contentadditional={door.contentadditional}
        />
      ) : (
        <DoorStory />
      );
    });
    return list;
  }
}
export default Calender;
