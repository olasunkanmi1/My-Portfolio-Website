import { PortfolioStyled } from "./Styled";
import { portfolioData } from "../../data/PortfolioData";
import ProjectCard from "./ProjectCard";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";

const Portfolio = ({ toggle }) => {
  return (
    <PortfolioStyled className={`content ${toggle === 4 ? "active-content" : ""}`}  >
      <h1 data-aos="fade-left">Some of my projects</h1>
      
      <div className="cards_container">
        {portfolioData.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <Dots className="first"/>
      <Dots className="second"/>
      <div id="portfolio" className='tag' />
    </PortfolioStyled>
  );
};

export default Portfolio;
