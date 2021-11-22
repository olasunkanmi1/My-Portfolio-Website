import React, { useState, useEffect } from "react";
import { ReactComponent as Chevron } from "../../assets/icons/chevron.svg";
import { ReactComponent as Link } from "../../assets/icons/link.svg";
import { ReactComponent as Play } from "../../assets/icons/play.svg";

const ProjectCard = ({ thumbnail, name, description, column, link, drive, tools, fade }) => {
  const [showDescription, setShowDescription] = useState(false);


  return (
    <div className="wrapper" data-aos={fade} key={name}>
      <div
        className="card"
        id
        showDescription={showDescription}
        style={{ gridColumn: `${column}`}}
      >
        <div className="thumbnail">
          <img src={thumbnail} alt="thumbnail" />
        </div>

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
              <div className="tools-visible">
                {tools.map((tool) => (
                  <div>{tool}</div>
                ))}
              </div>
              <a href={drive} target="_blank" rel="noreferrer">
                { link ? <> URL <Link /> </> :  <> DEMO <Play /> </> }
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="tools">
        {tools.map((tool) => (
          <div>{tool}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
