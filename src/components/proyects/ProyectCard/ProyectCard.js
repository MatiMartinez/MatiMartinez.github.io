import React from "react";
import "./ProyectCard.css";

export default function ProyectCard({
  kit,
  title,
  description,
  image,
  position,
  proyectlink,
  color,
  btncolor,
}) {
  return (
    <div className="main-proyect-card" style={{ backgroundColor: color }}>
      <div className="grid">
        {position === "left" && (
          <div className="grid-item-image p-4">
            <img src={image} alt="proyect" className="img-fluid" />
          </div>
        )}
        <div className="grid-item-info">
          <h2 className="">{kit}</h2>
          <h1>{title}</h1>
          <p>{description}</p>
          <a
            href={proyectlink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-proyectlink mr-2"
            style={{ backgroundColor: btncolor }}
          >
            VER PROYECTO
          </a>
        </div>
        {position === "right" && (
          <div className="grid-item-image p-4">
            <img src={image} alt="proyect" className="img-fluid" />
          </div>
        )}
      </div>
    </div>
  );
}
