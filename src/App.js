import TopRow from "./Top_row.js";
import React from "react";
import "./App.css";
import UserContext from "./Counter.js";
import ChangeContext from "./Change.js";
import Calender from "./Calender.js";
import Footer from "./Footer.js";
import image from "./img/background.png";

export default function App() {
  const counter = {
    count: 1,
  };

  const change = {
    changer: 0,
  };
  console.log("change " + change.changer);

  return (
    <div id="background" style={{backgroundImage:`url(${image})`}}>
      <div id="grid">
        <h1 id="title" >Nemesis</h1>
        <UserContext.Provider value={counter}>
          <ChangeContext.Provider value={change}>
            <TopRow />
            <Calender />
          </ChangeContext.Provider>
        </UserContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

/* export default App; */
