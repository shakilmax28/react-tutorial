import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function onHandleBill(value) {
    setBill(value);
  }

  function onHandleTip(value) {
    setTip(value);
  }

  function onHandleFriendTip(value) {
    setFriendTip(value);
  }

  function onHandleReset() {
    setBill(0);
    setTip(0);
    setFriendTip(0);
  }

  return (
    <>
      <Bill bill={bill} onHandleBill={onHandleBill} />
      <Service tip={tip} onHandleTip={onHandleTip}>
        How did you like the service?
      </Service>
      <Service tip={friendTip} onHandleTip={onHandleFriendTip}>
        How did your friend like the service?
      </Service>
      {bill > 0 ? (
        <Payment
          bill={bill}
          tip={tip}
          fiendTip={friendTip}
          onHandleReset={onHandleReset}
        />
      ) : (
        ""
      )}
    </>
  );
}

function Bill({ bill, onHandleBill }) {
  return (
    <div>
      <p>
        How much was the bill?{" "}
        <input
          type="text"
          value={bill}
          onChange={(e) => onHandleBill(e.target.value)}
        ></input>
      </p>
    </div>
  );
}

function Service({ children, tip, onHandleTip }) {
  return (
    <p>
      {children}{" "}
      <select value={tip} onChange={(e) => onHandleTip(e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </p>
  );
}

function Payment({ bill, tip, fiendTip, onHandleReset }) {
  // console.log(bill + " " + tip + " " + fiendTip);
  // let temp = ((Number(tip) + Number(fiendTip)) / 2) * bill;
  // console.log(temp);
  let totalTip = Math.ceil(
    (((Number(tip) + Number(fiendTip)) / 2) * bill) / 100
  );
  let totalBill = Number(bill) + Number(totalTip);

  return (
    <>
      <h1>
        You pay ${totalBill} (${bill} + ${totalTip})
      </h1>
      <button onClick={onHandleReset}>Reset</button>
    </>
  );
}

export default App;
