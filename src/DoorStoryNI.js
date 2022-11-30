/* import React, { useState, useContext } from "react";
 */
import React from "react";
import story from "./img/story.png";

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

export default function Door(props) {
  const isActivestore = "isActivestore" + props.shorttitle;
  const [isActive, setActive] = useStickyState(true, isActivestore);
  const handleToggle = () => {
    setActive(!isActive);
  };



  return (
    <div className="calender">
      <div className={isActive ? "door" : "doorOpen"} onClick={handleToggle}>
        <h3 className="door_title">
          <span className="title">{props.title}</span>
          <span className="shorttitle">{props.shorttitle}</span>
        </h3>
        <hr className="separation"></hr>
        <img src={story} alt="story" className="icons"></img>
      </div>
      <div className={isActive ? "doorContentEmpty" : "doorContent"}>
        <p>{props.contentmain}</p>
      </div>
    </div>
  );
}
