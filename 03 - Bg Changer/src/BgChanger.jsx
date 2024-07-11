import { useState } from "react";
import helper from "./Helper.js";

export default function BgChanger() {
  const [color, setColor] = useState(helper(3));
  const colours = `rgb(${color[0]},${color[1]},${color[2]})`;

  function newColor() {
    setColor(helper(3));
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center" style={{ backgroundColor: colours }}>
      <div>
        <h1>BG CHANGER</h1>
        <br />
        <h2 style={{fontSize:"22px", fontWeight:"bold"}}>{colours}</h2>
        <br />
        <button onClick={newColor}>Get New Color</button>
      </div>
    </div>
  );
}
