import React, { useState } from "react";
import "./App.css";
function Todo(props): JSX.Element {
  const date = new Date();
  let current = `${date.getMonth()}/${date.getDate()}`;
  let [there, remove] = useState(true);
  function rm() {
    remove(() => {
      there = false;
    });
  }
  return (
    <>
      {there && (
        <div className=" grid grid-cols-4 outline   grid-flow-col-dense">
          <span>start: {date.toLocaleDateString()}</span>
          <span className=" text-center">{props.name}</span>
          <span>target: {props.end}</span>
          <button onClick={rm}>done</button>
        </div>
      )}
    </>
  );
}

export default Todo;
