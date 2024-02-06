import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center ">
        <div className="flex w-[80%] items-center justify-between m-2">
          <h1 className="text-3xl font-bold ">LOGO</h1>
          <h3>About me</h3>
          <h3>Experiences</h3>
          <h3>Skills</h3>
          <h3>Projects</h3>
          <h3>Contact me</h3>
          <button className="px-5 py-2 bg-slate-400">button</button>
        </div>
      </div>
      <Card></Card>
    </>
  );
}

export default App;
