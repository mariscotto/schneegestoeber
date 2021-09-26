import Calender from "./Calender.js";
import TopRow from "./Top_row.js";
import React, {useState} from 'react';
import "./App.css";

function App() {

  var today = new Date(),
  date =  today.getDate();
  console.log(date);
  

  return (
    <>
    <body>
      <div id="grid">
        <h1 id="title">Schneegestöber</h1>
        <TopRow />
        <Calender/>
      </div>
      </body>
    </>
  );
}

export default App;
