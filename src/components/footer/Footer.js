import React from "react";
import "./Footer.css";

import { ImLinkedin, ImGithub, ImMail } from "react-icons/im";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container footer-top">
        <div className="row">
          <div className="col-4 footer-col"></div>
          <div className="col-4"></div>
          <div className="col-4 footer-col footer-col-list">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/MatiMartinez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-unstyled"
                >
                  <ImGithub size="1.5em" />
                  <p>Github</p>
                </a>
              </li>
              {/*<li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-unstyled"
                >
                  <ImMail size="1.5rem" />
                  <p>Email</p>
                </a>
              </li>*/}
              <li>
                <a
                  href="https://www.linkedin.com/in/mati-martinez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-unstyled"
                >
                  <ImLinkedin size="1.5rem" />
                  <p>LinkedIn</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Design by me &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
