import React, { useState, useEffect } from "react";
import { ReactComponent as Chevron } from "../../assets/icons/chevron.svg";
import { ReactComponent as Link } from "../../assets/icons/link.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ thumbnail, name, description, column, link, tools, fade }) => {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      offset: 0,
      // easing: "ease-in-out", 
      // once: false
    });
  }, []);

  return (
    <div className="wrapper" >
      <div
        className="card"
        showDescription={showDescription}
        style={{ gridColumn: `${column}`, gridRow: "1/2" }}
      >
        <img src={thumbnail} alt="thumbnail" className="thumbnail" />
        <div className="about">
          <div
            className="name"
            onClick={() => setShowDescription(!showDescription)}
          >
            <h3>{name}</h3>
            <div className={showDescription ? "up" : "down"}>
              <Chevron />
            </div>
          </div>
          {showDescription && (
            <div className="description" showDescription={showDescription}>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noreferrer">
                URL <Link />
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="tools" style={{ gridRow: "1/2" }}>
        {tools.map((tool) => (
          <div>{tool}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
