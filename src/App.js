import TopRow from "./Top_row.js";
import React from "react";
import "./App.css";
import Door from './DoorStory.js';
import doordata from './doorconfig/doors.json';
import UserContext from './Counter.js';



export default function App() {

/*   const [counter, setCounter] = useState(1); */

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


const counter = {
  count:1
}

  var today = new Date(),
  date =  today.getDate();
  console.log(date);
  console.log(doordata);
  


  return (
    <>
    <body>
      <div id="grid">
        <h1 id="title">The blizzard</h1>
        <UserContext.Provider value={counter}>
        <TopRow/>
        <Door/>
        </UserContext.Provider>
      </div>
      </body>
    </>
  );
}

/* export default App; */
