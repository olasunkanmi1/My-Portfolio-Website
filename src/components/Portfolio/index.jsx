import React, { useState } from "react";
import { PortfolioStyled } from "./Styled";
import { portfolioData } from "../../data/PortfolioData";
import ProjectCard from "./ProjectCard";

const Portfolio = ({ toggle }) => {
    const [projects, setprojects] = useState(portfolioData)

  return (
    <PortfolioStyled id="portfolio" className={ toggle === 4 ? 'content active-content' : 'content'}>
      <h2>Some of my projects</h2>

        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
    </PortfolioStyled>
  );
};

export default Portfolio;
