import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const getDaysBetween = (date1, date2) => {
    const timeDiff = Math.abs(date2 - date1); // absolute difference in milliseconds
    return Math.floor(timeDiff / (1000 * 3600 * 24)); // convert to days
  };

  const dateInfo = (inc) => {
    const day = new Date();
    day.setDate(day.getDate() + inc);

    const today = new Date();

    const dayName = day.toLocaleDateString("en-US", { weekday: "long" }); // e.g., "Friday"
    const date = day.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (today > day) {
      if (getDaysBetween(today, day) === 0) {
        return "Today is " + dayName + " " + date;
      } else {
        return (
          getDaysBetween(today, day) + " day ago was " + dayName + " " + date
        );
      }
    } else if (today < day) {
      if (getDaysBetween(today, day) === 0) {
        return "Today is " + dayName + " " + date;
      } else {
        return (
          getDaysBetween(today, day) + " from today is " + dayName + " " + date
        );
      }
    } else {
      return "Today is " + dayName + " " + date;
    }
  };

  return (
    <div className="App">
      <div className="component">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <p>Step: {step}</p>
      </div>
      <div className="component">
        <button onClick={() => setCount((ct) => ct - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((ct) => ct + step)}>+</button>
      </div>
      <div>
        <p>{dateInfo(count)}</p>
      </div>
      <div>
        {(step > 0 || count > 0) && (
          <button
            onClick={() => {
              setStep(0);
              setCount(0);
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
