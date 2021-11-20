import { useEffect } from "react";
import { PortfolioStyled } from "./Styled";
import { portfolioData } from "../../data/PortfolioData";
import ProjectCard from "./ProjectCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = ({ toggle }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      offset: 50,
    });
  }, []);

  return (
    <PortfolioStyled id="portfolio" className={ toggle === 4 ? 'content active-content' : 'content'}>
      <h1 data-aos="fade-left">Some of my projects</h1>

        {portfolioData.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
    </PortfolioStyled>
  );
};

export default Portfolio;
