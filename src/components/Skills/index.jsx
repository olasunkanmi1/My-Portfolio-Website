import React, { useEffect } from "react";
import { SkillsStyled } from "./Styled";
import { SkillsData } from "../../data/SkillsData";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = ({ toggle }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      offset: 50,
    });
  }, []);

  return (
    <SkillsStyled
      id="skills"
      className={toggle === 3 ? "content active-content" : "content"}
    >
      <h1 data-aos="fade-left">My Relevant Skills</h1>

      <div className="wrap">
          {SkillsData.map((skill) => (
              <div className="skill" data-aos="fade-up">
                {skill.svg}
                <h4>{skill.name}</h4>
              </div>
          ))}
      </div>
    </SkillsStyled>
  );
};

export default Skills;
