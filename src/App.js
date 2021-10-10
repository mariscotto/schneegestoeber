import TopRow from "./Top_row.js"
import React from "react"
import "./App.css"
import UserContext from './Counter.js'
import ChangeContext from './Change.js'
import Calender from './Calender.js'



export default function App() {

/*   const [counter, setCounter] = useState(1); */


const counter = {
  count:1
}

const change = {
  changer:0
}
console.log("change "+change.changer)

/*   var today = new Date(),
  date =  today.getDate()
  console.log(date)
  console.log(doordata) */

/*  let html = <Door/ > */
let html=<Calender />

      /* 
   React.useEffect(() => { 
      for (var i=1;i<date+1;i++) {
        if(doorType ===1) {
          DoorStory.js fill with doors.json[i]
          new file: DoorStory+shorttitle+js
          html+=<DoorName / >
        }
        if(doorType ===2) {
          DoorItem.js fill with doors.json[i]
          new file: DoorItem+shorttitle+js
          html+=<DoorName / >
        }
        if(doorType ===3) {
          DoorEncounter.js fill with doors.json[i]
          new file: DoorEncounter+shorttitle+js
          html+=<DoorName / >
        }
      }
Until the current day is reached (with an increment of 1 starting from 1)
         Take the json file, see if "doorType" is 1, 2, or 3
         If it's 1: take the DoorStory.js template and add the json Eigenschaften in there. Create a new file to the folder "doors" called DoorStory+shorttitle.
         If it's 2: take the DoorItem.js template and add the json Eigenschaften in there. Create a new file to the folder "doors" called DoorItem+shorttitle.
         If it's 3: take the DoorEncounter.js template and add the json Eigenschaften in there. Create a new file to the folder "doors" called DoorEncounter+shorttitle.
        And add the tag to the variable html
  }, []) 
  */

  return (

      <div id="grid">
        <h1 id="title">Frozen Flames</h1>
        <UserContext.Provider value={counter}>
        <ChangeContext.Provider value={change}>
        <TopRow/>
        {html}
        </ChangeContext.Provider>
        </UserContext.Provider>
      </div>
      
  );
}

/* export default App; */
