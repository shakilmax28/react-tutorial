import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) {
      //corrent way: using fucntion to change the state value
      setStep((s) => s - 1);
      //non correct way: dont change the state value directly
      // setStep(step - 1);
    } else {
      // But we do not need sort to function for setting state if we are not using the previous state value.
      setTest({ name: "Jonas" });
    }
    setTest({ name: "MAX" });
    console.log(test);
    //BAD PRACTICE
    // test.name = "MAX";
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              method={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              method={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

// here the final prop is react defined children prop. it will get all the content thats been written inside of the Component Call
function Button({ style, method, children }) {
  return (
    <button style={style} onClick={method}>
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h1>Step: {step}</h1>
      {children}
    </p>
  );
}

export default App;
