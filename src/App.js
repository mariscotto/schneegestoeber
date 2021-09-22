import minus from "./img/minus.png";
import plus from "./img/plus.png";
import "./App.css";

function App() {
  return (
    <>
    <div id="grid">
      <h1 id="title">Schneegestöber</h1>

      <div class="top_row">
        <div class="inspiration_dice">
          <img src={minus} alt="minus" class="buttons"></img>
          <input type="number"></input>
          <img src={plus}  alt="plus" class="buttons"></img>
        </div>
        <button class="character">character sheet</button>
      </div>

      <div class="tuer">
        <h3>1: The door</h3>
      </div>
      </div>
    </>
  );
}

export default App;
