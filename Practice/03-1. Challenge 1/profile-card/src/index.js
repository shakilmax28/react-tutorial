import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="Tanjiro_kamado.webp"
      width="400"
      height="400"
      alt="Tangiro"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Kamado Tangiro</h1>
      <span>
        A very good swordsman with the ability of doing water style breathing
        techniques. Main protagonist of the Demon Slayer.
      </span>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill name="sword-fight" emoji="⚔️" color="red" />
      <Skill name="water-style" emoji="🌊" color="yellow" />
      <Skill name="fire-style" emoji="🔥" color="red" />
      <Skill name="breathing" emoji="💨" color="yellow" />
      <Skill name="demon-slayer" emoji="👹⚔️" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <span style={{ background: props.color }} className="skill">
      {props.name} {props.emoji}
    </span>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
