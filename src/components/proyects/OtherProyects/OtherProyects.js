import React from "react";
import OtherProyectCard from "./OtherProyectCard/OtherProyectCard";
import "./OtherProyects.css";

import GithubProfilesImg from "../../../assets/github-profiles.svg";
import ImageSearchImg from "../../../assets/image-search.svg";

export default function OtherProyects() {
  return (
    <div className="main-other-proyects">
      <div className="grid-other-proyects-list">
        <OtherProyectCard
          link="https://matimartinez-github-profiles.netlify.app/"
          title="Github Profiles"
          image={GithubProfilesImg}
        />
        <OtherProyectCard
          link="https://matimartinez-image-search.netlify.app/"
          title="Image Search"
          image={ImageSearchImg}
        />
      </div>
    </div>
  );
}
