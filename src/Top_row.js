import React, { useContext } from "react"
import minus from "./img/minus.png"
import plus from "./img/plus.png"
import line from "./img/line.png"
import PDF from "./sheet.pdf"
import UserContext from './Counter.js'
import ChangeContext from './Change.js'

export default function Top_row() {

  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key)
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
    })
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
  }

  const counter = useContext(UserContext)
  const change = useContext(ChangeContext)
  const [counternumber, setCounter] = useStickyState(1, "counterstore")
  const [changenumber, setChanger] = useStickyState(0, "changestore")
  change.changer = changenumber

  React.useEffect(() => { 
    const image = document.getElementById("d20")
    if (change.changer === 1) {
      setCounter(counter.count)
    } else {
      counter.count= counternumber
    }
      image.src = counternumber + ".png";
      console.log("counternumber start"+counternumber)
      console.log("counter.count start"+counter.count)
      console.log("change.changer start"+change.changer)
  })

  function onLoad(counter2) {
    if(counter2>12) {
      setCounter(12)
    }
    if(counter2<0) {
      setCounter(0)
    }
  }

  function reduce(){
    const image = document.getElementById("d20")
    if (change.changer === 1) {
      counter.count=counter.count-1
      setCounter(counter.count)
    } else {
      counter.count= counternumber-1
      setCounter(counter.count)
    }
    if (counternumber <= 0) {
      setCounter(0)
      window.confirm(
        '"Perfection is achieved when there is nothing left to take away." Looks like you do not have enough inspiration dice.'
      )
    }
    image.src = counternumber + ".png";
    console.log("counter.count"+ counter.count)
    console.log("counternumber" + counternumber)
    change.changer=0
    setChanger(change.changer)
  }

  function increase(){
    const image = document.getElementById("d20")
    if (change.changer === 1) {
      counter.count=counter.count+1
      setCounter(counter.count)
    } else {
      counter.count= counternumber+1
      setCounter(counter.count)
    }
    if (counternumber >= 12) {
      setCounter(12)
      window.confirm(
        '"The proximity of a desirable thing tempts one to overindulgence". You may not have more than 12 inspiration dice.'
      )
    }
    image.src = counternumber + ".png";
    console.log("counter.count"+ counter.count)
    console.log("counternumber" + counternumber)
    change.changer=0
    setChanger(change.changer)
  }


  return (
    <div className="top_row">
      <div className="inspiration_dice">
        <img
          src={minus}
          alt="minus"
          className="operation"
          onClick={() => {onLoad(counternumber-1);reduce()}}
        ></img>
        <img src="1.png" alt="inspiration" className="inspiration" id="d20"></img>
        <img
          src={plus}
          alt="inspiration"
          className="operation"
          onClick={() => {onLoad(counternumber+1);increase()}}
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
