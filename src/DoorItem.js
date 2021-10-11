import React from "react";
import item from "src/img/item.png";

export default function Door(props) {
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

  const isActivestore = "isActivestore" + props.shorttitle;
  const [isActive, setActive] = useStickyState(true, isActivestore);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div class="calender">
      <div className={isActive ? "door" : "doorOpen"} onClick={handleToggle}>
        <h3 class="door_title">
          <span class="title">{props.title}</span>
          <span class="shorttitle">{props.shorttitle}</span>
        </h3>
        <hr class="separation"></hr>
        <img src={item} alt="item" class="icons"></img>
      </div>
      <div className={isActive ? "doorContentEmpty" : "doorContent"}>
        <p>{props.contentmain}</p>
        <img src={props.image} alt="item" class="item"></img>
      </div>
    </div>
  );
}
