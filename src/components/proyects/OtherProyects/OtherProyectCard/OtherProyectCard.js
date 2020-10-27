import React from "react";
import "./OtherProyectCard.css";

export default function OtherProyectCard({ title, image, link }) {
  return (
    <div className="main-other-card">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="link-unstyled other-proyect-link"
      >
        <img
          src={image}
          alt="bg-other-card"
          className="img-fluid other-proyect-img"
        />
        <h1>{title}</h1>
      </a>
      <hr />
    </div>
  );
}
