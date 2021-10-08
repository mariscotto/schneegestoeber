import TopRow from "./Top_row.js";
import React from "react";
import "./App.css";
import Door from './DoorStory.js';
import doordata from './doorconfig/doors.json';
import UserContext from './Counter.js';



export default function App() {

/*   const [counter, setCounter] = useState(1); */


const counter = {
  count:1
}

  var today = new Date(),
  date =  today.getDate();
  console.log(date);
  console.log(doordata);
  


  return (

      <div id="grid">
        <h1 id="title">The blizzard</h1>
        <UserContext.Provider value={counter}>
        <TopRow/>
        <Door/>
        </UserContext.Provider>
      </div>
      
  );
}

/* export default App; */
