import React from 'react'
import encounter from "./img/encounter.png"

export default function Door(props) {

  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key)
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
  }
  
  const isActivestore = "isActivestore"+props.shorttitle
  const [isActive, setActive] = useStickyState(true, isActivestore)


    const handleToggle = () => {
        setActive(!isActive)
    }

    const showResultsstore = "showResultsstore"+props.shorttitle
    const [showResults,  setShowResults] = useStickyState(false, showResultsstore)

    const Results = () => (
      <p>{props.contentadditional}</p>
    )

    return (
        <div class="calender">
            
        <div className={isActive ? "door": "doorOpen"} onClick={handleToggle}>
          <h3 class="door_title">
          <span class="title">{props.title}</span>
          <span class="shorttitle">{props.shorttitle}</span>
          </h3>
          <hr class="separation"></hr>
          <img src={encounter} alt="story" class="icons"></img>
        </div>
        <div className={isActive ? "doorContentEmpty": "doorContent"} >
            <p>{props.contentmain}</p>
            <p class="link" onClick = {() => setShowResults(true)} >Show encounter</p>
            { showResults ? <Results /> : null }
            
        </div>
      </div>
    )
}
