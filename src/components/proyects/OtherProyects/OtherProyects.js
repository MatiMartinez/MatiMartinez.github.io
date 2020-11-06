import React from "react";
import OtherProyectCard from "./OtherProyectCard/OtherProyectCard";
import "./OtherProyects.css";

import GithubProfilesImg from "../../../assets/github-profiles.svg";
import ImageSearchImg from "../../../assets/image-search.svg";
import SocialMediaDashboardImg from "../../../assets/social-media-dashboard.png";
import TestimonialsGridSectionImg from "../../../assets/testimonials-grid-section.png";
import RoomHomePageImg from "../../../assets/room-homepage.png";

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
        <OtherProyectCard
          link="https://social-media-dashboard-with-theme-switcher-navy-one.vercel.app/"
          title="Social Media Dashboard"
          image={SocialMediaDashboardImg}
        />
        <OtherProyectCard
          link="https://testimonials-grid-section-ashy.vercel.app/"
          title="Testimonials Grid Section"
          image={TestimonialsGridSectionImg}
        />
        <OtherProyectCard
          link="https://room-homepage-alpha.vercel.app/"
          title="Room Home Page"
          image={RoomHomePageImg}
        />
      </div>
    </div>
  );
}
