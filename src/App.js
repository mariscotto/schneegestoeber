import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1 id="title">Schneegestöber</h1>
      <div class="top_row">
        <div class="inspiration_dice">
          <img src="minus.jpg"></img>
          <input type="number"></input>
          <img src="plus.jpg"></img>
        </div>
        <button class="character">character sheet</button>
      </div>
    </>
  );
}

export default App;
