import { useEffect } from "react";
import { PortfolioStyled } from "./Styled";
import { portfolioData } from "../../data/PortfolioData";
import ProjectCard from "./ProjectCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = ({ toggle }) => {
  useEffect(() => {
    Aos.init({
      duration: 3000, 
      offset: 500,
    });
  }, []);

  return (
    <PortfolioStyled id="portfolio" className={ toggle === 4 ? 'content active-content' : 'content'}>
      <h2 data-aos="fade-left">Some of my projects</h2>

        {portfolioData.map((project) => (
          <ProjectCard key={project.name} {...project} data-aos="fade-left" />
        ))}
    </PortfolioStyled>
  );
};

export default Portfolio;
