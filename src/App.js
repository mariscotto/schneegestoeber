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



  return (

      <div id="grid">
        <h1 id="title">Frozen Flames</h1>
        <UserContext.Provider value={counter}>
        <ChangeContext.Provider value={change}>
        <TopRow/>
        <Calender />
        </ChangeContext.Provider>
        </UserContext.Provider>
      </div>
      
  );
}

/* export default App; */
