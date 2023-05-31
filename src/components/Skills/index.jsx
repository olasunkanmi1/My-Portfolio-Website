import React from "react";
import { SkillsStyled } from "./Styled";
import { SkillsData } from "../../data/SkillsData";

const Skills = ({ toggle }) => {
  return (
    <SkillsStyled className={`content ${toggle === 3 ? "active-content" : ""}`}>
      <h1 data-aos="fade-left">My Expertise</h1>

      <div className="wrap">
          {SkillsData.map((skill) => (
              <div className="skill" data-aos="fade-up" key={skill.name}>
                {skill.svg}
                <h4>{skill.name}</h4>
              </div>
          ))}
      </div>

      <div className='more'> AND MORE... </div>
      <div id="skills" className='tag' />
    </SkillsStyled>
  );
};

export default Skills;
