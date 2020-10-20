import React, { useEffect } from "react";
import "./Contact.css";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Contact() {
  useEffect(() => {
    document.getElementById("main-contact").style.opacity = "1";
  }, []);

  return (
    <article className="main-contact container" id="main-contact">
      <h1>Contacto</h1>
      <div className="contact-body">
        <p className="m-0 p-0">Email</p>
        <p>martinezmatiemi@gmail.com</p>
        <div>
          <p className="m-0 p-0">LinkedIn</p>

          <p>
            <a
              href="https://www.linkedin.com/in/mati-martinez/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-black"
            >
              /mati-martinez
            </a>
          </p>
        </div>
      </div>
      <div className="contact-social">
        <a
          href="https://github.com/MatiMartinez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="github-icon" size="3.5rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/matias-martinez-a8ba3a1b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="linkedin-icon" size="3.5rem" />
        </a>
      </div>
    </article>
  );
}
