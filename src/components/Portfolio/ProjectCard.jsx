import React, { useState } from "react";
import { ReactComponent as Chevron } from "../../assets/icons/chevron.svg";

const ProjectCard = ({ thumbnail, name, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="wrapper">
      <div className="card" showDescription={showDescription}>
        <img src={thumbnail} alt="thumbnail" className="thumbnail" />
        <div className="about">
          <div
            className="name"
            onClick={() => setShowDescription(!showDescription)}
          >
            <h4>{name}</h4>
            <div className={showDescription ? "up" : "down"}>
              <Chevron />
            </div>
          </div>
          {showDescription && (
            <div className="description" showDescription={showDescription}>
              {" "}
              {description}{" "}
            </div>
          )}
        </div>
      </div>

      <div className="tools">
          <h3>tools</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
