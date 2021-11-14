import React from "react";
import { SkillsStyled } from "./Styled";
import { SkillsData } from "../../data/SkillsData";

const Skills = ({ toggle }) => {
  return (
    <SkillsStyled
      id="skills"
      className={toggle === 3 ? "content active-content" : "content"}
    >
      <h1>My Relevant Skills</h1>

      <div className="wrap">
          {SkillsData.map((skill) => (
              <div className="skill">
                {skill.svg}
                <h4>{skill.name}</h4>
              </div>
          ))}
      </div>
    </SkillsStyled>
  );
};

export default Skills;
