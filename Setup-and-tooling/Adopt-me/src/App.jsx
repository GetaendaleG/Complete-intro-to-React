import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./pet";

const App= ()=>{
  return(
    <div>
      <h1>Adopt Me</h1>
      <Pet animal="Dog" name="Luna" breed="Havanese"/>
      <Pet animal="Bird" name="Pepper" breed="Cocktail"/>
      <Pet animal="Cat" name="Doink" breed="Mix"/>
    </div>
  )
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
