import React, { useState } from "react";
import { PortfolioStyled } from "./Styled";
import { portfolioData } from "../../data/PortfolioData";
import { ReactComponent as Chevron } from '../../assets/icons/chevron.svg'

const Portfolio = () => {
    const [showDescription, setShowDescription] = useState(null);
    const toggle = () => {
        setShowDescription(!showDescription)
    };

  return (
    <PortfolioStyled id="portfolio" showDescription={showDescription}>
      <h2>Portfolio</h2>

      <div className="card-wrapper">
        {portfolioData.map((project) => (
          <div key={project.name} className="card">
            <img src={project.thumbnail} alt="thumbnail" className="thumbnail" />
            <div className="about">
              <div className="name" onClick={toggle}>
                  <h4>{project.name}</h4>
                  <div className="svg"><Chevron /></div>
              </div>
              <div className="description" showDescription={showDescription}>{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </PortfolioStyled>
  );
};

export default Portfolio;
