import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import skills from "./skills";

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
      src="image.png"
      width="400"
      height="400"
      alt="Shakil"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Mohiuddin Shakil</h1>
      <span>
        A professional full stack engineer using Java Spring Boot and Thymeleaf
        going for developing front-end using React. Experience in core Java and
        Spring Boot for over 7 years.
      </span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          name={skill.skill}
          emoji={
            skill.level === "beginner"
              ? "👶"
              : skill.level === "intermediate"
              ? "👍"
              : "💪"
          }
          color={skill.color}
        />
      ))}
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
