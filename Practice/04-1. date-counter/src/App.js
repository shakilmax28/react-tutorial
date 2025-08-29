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

    console.log(inc);

    const today = new Date();

    const dayName = day.toLocaleDateString("en-US", { weekday: "long" }); // e.g., "Friday"
    const date = day.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (today > day) {
      return (
        getDaysBetween(today, day) + " day ago was " + dayName + " " + date
      );
    } else if (today < day) {
      return (
        getDaysBetween(today, day) + " from today is " + dayName + " " + date
      );
    } else {
      return "Today is " + dayName + " " + date;
    }
  };

  return (
    <div className="App">
      <div className="component">
        <button onClick={() => setStep((st) => (st > 0 ? st - 1 : st))}>
          -
        </button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((st) => st + 1)}>+</button>
      </div>
      <div className="component">
        <button onClick={() => setCount((ct) => ct - step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((ct) => ct + step)}>+</button>
      </div>
      <div>
        <p>{dateInfo(count)}</p>
      </div>
    </div>
  );
}

export default App;
