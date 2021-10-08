import React, { useContext } from "react";
import minus from "./img/minus.png";
import plus from "./img/plus.png";
import line from "./img/line.png";
import PDF from "./sheet.pdf";
import UserContext from './Counter.js';
import ChangeContext from './Change.js';

export default function Top_row() {

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

  const counter=useContext(UserContext)
  const change = useContext(ChangeContext)
  const [counternumber, setCounter] = useStickyState(1, "counterstore")



  React.useEffect(() => { 
    const image = document.getElementById("d20")
    if (change.changer === 1) {
      counter.count= counternumber;
      image.src = counter.count + ".png";
      console.log("passiert das?")
    } else {
      image.src = counternumber + ".png";
    }
  })

 /*    console.log("counter.count bla"+counter.count)
    console.log("counternumber bla"+counternumber)
    console.log("change bla"+change.changer)   
 */

/*     counter.count=counternumber;
    setCounter(counter.count); */

/* 
  const SampleComponent = () => {
    React.useEffect(() => {
      counter.count=counternumber;
      setCounter(counter.count);
    }, [])
  } */




/*   React.useEffect(() => {
      correctnumber(change.changer)
  }, [change.changer]);

  function correctnumber(change) {
    const image = document.getElementById("d20")
    setCounter(counter.count)
    image.src = counternumber + ".png";
    console.log("counter.count "+counter.count)
    console.log("counternumber "+counternumber)
    console.log("change "+change) }
  */


  function onLoad(counter2) {
    if(counter2>12) {
      setCounter(12);
    }
    if(counter2<0) {
      setCounter(0);
    }
/*     const a1 = counternumber + ".png";
    const image = document.getElementById("d20");
    image.src = a1;
    console.log(image.src); */
  }

  function reduce(){
    const image = document.getElementById("d20")
    counter.count = counternumber-1
    if (change.changer === 1) {
      counter.count= counternumber;
      image.src = counter.count + ".png";
      console.log("passiert das?")
    } else {
      setCounter(counter.count)
      image.src = counternumber + ".png";
    }
    change.changer=0
    
  }

  function increase(){
    const image = document.getElementById("d20")
    counter.count = counternumber+1
    if (change.changer === 1) {
      counter.count= counternumber;
      image.src = counter.count + ".png";
      console.log(image.src)
    } else {
      setCounter(counter.count)
      image.src = counternumber + ".png";
      console.log(image.src)
    }
    change.changer=0
  }


  return (
    <div className="top_row">
      <div className="inspiration_dice">
        <img
          src={minus}
          alt="minus"
          className="operation"
          onClick={() => { setCounter(counternumber - 1);onLoad(counternumber-1);reduce()}}
        ></img>
        <img src="1.png" alt="inspiration" className="inspiration" id="d20"></img>
        <img
          src={plus}
          alt="inspiration"
          className="operation"
          onClick={() => {setCounter(counternumber + 1);onLoad(counternumber+1);increase()}}
        ></img>
      </div>
      <div className="character_link">
        <a className="character" href={PDF} target="_blanc">
          character sheet
        </a>
        <img src={line} alt="line" className="line"></img>
      </div>
    </div>
  );
}
