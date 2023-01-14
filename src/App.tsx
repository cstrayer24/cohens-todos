import React, { SetStateAction, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import Todo from "./todo";
import Datetime from "react-datetime";

function App() {
  const input = document.querySelector("#input");
  const end = document.querySelector("#end");
  const date = new Date();
  let target = end?.value.split("-").join("/");

  console.log(target);

  useEffect(() => {
    newEl(el.concat(<p></p>));
  }, []);
  const [el, newEl] = useState([]);
  const [t, setTarget] = useState("");
  function dateChange() {
    setTarget((t): SetStateAction<any> => {
      t = target;
    });
  }

  function clickHandle() {
    newEl(el.concat(<Todo name={input.value} end={target} />));
    console.log(el);
  }

  return (
    <div className="">
      <input
        type="text"
        id="input"
        className=" text-green-500 mr-8 border-solid border-white border-4 bg-black"
      />
      <input
        type="date"
        name=""
        id="end"
        className=" text-green-500 mr-8 border-solid border-white border-4 bg-black"
        onChange={dateChange}
      />
      <button
        onClick={clickHandle}
        className="border-solid border-white border-4"
      >
        add todo
      </button>
      {el}
    </div>
  );
}

export default App;
