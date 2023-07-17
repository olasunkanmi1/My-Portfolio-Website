import React from "react";
import { AboutStyled } from "./Styled";
import { aboutData } from "../../data/AboutData";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";

const About = ({ toggle }) => {
  return (
    <AboutStyled
      className={`content ${toggle === 2 ? "active-content" : ""}`}
    >
      <h1 data-aos="fade-left">About Me</h1>
      <div className="wrap" data-aos="fade-left">
        {aboutData.map((item) => (
          <div className="card" data-aos="fade-up" key={item.title}>
            <div className="svg">{item.svg}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <p className='about'>
        I'm an experienced frontend developer who is proficient in the use of React, Next.js, JavaScript, Typescript, and other various frontend libraries for developing scalable and responsive web applications. I'm also knowledgeable in MongoDB, Express, and Node.js for backend development. I collaborates effectively with cross-functional teams and I'm passionate about learning new technologies and staying current with industry trends. I've got a successful track record in delivering noteworthy projects that are well-received by clients and team members.
      </p>

      <p className='about'>
        Additionally, as a highly motivated individual, I feel confident that my
        skill set and dedication will enable me to become an asset to
        your organization or project.
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
          href="https://drive.google.com/file/d/1XiCCeZZ0fbFdRyM0oY_mxzDSkMgoxoN3/view?usp=sharing"
          className="btn cv"
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
      </div>

      <Dots className="first" />
      <Dots className="second" />
      <div id="about" className='tag' />
    </AboutStyled>
  );
};

export default About;
