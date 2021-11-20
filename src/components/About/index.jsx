import React from "react";
import { AboutStyled } from "./Styled";
import { aboutData } from "../../data/AboutData";

const About = ({ toggle }) => {
  return (
    <AboutStyled
      id="about"
      className={toggle === 2 ? "content active-content" : "content"}
    >
      <h1>About Me</h1>
      <div className="wrap">
        {aboutData.map((item) => (
          <div className="card">
            <div className="svg">{item.svg}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <p>
        I'm a Lagos-based Junior Frontend Developer who is passionate about
        continuous learning as well as gaining real-world experience so as to
        accelerate my software development career. As a quick learner, I am
        capable of performing tasks at hand with little or no supervision.{" "}
      </p>

      <p>
        Additionally, as a highly motivated individual, I feel confident that my
        skills set and dedication will enable me to become a valuable asset to
        your project or organization.
      </p>

      <div className="buttons">
        <a
          href="mailto:olasunkanmiaq@gmail.com"
          className="btn mail"
          target="_blank"
          rel="noreferrer"
        >
          Get in touch
        </a>
        <a
          href="https://drive.google.com/file/d/1uljD4lDOPelv9I_2UYcT_2z6sfeBj0pU/view?usp=sharing"
          className="btn cv"
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
      </div>
    </AboutStyled>
  );
};

export default About;
