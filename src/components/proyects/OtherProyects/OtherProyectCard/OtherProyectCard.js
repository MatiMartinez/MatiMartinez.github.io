import React from "react";
import "./OtherProyectCard.css";

export default function OtherProyectCard({ title, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="link-unstyled other-proyect-link"
    >
      <div className="main-other-card">
        <img
          src={image}
          alt="bg-other-card"
          className="img-fluid other-proyect-img"
        />
        <h1 className="other-card-title">{title}</h1>
      </div>
      <hr className="w-75 border" />
    </a>
  );
}
