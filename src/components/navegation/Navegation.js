import React, { useState } from "react";
import "./Navegation.css";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Navegation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="px-5 py-4">
      <Navbar expand="md">
        <NavbarBrand
          className="navbar-brand link-unstyled"
          tag={RRNavLink}
          to="/"
        >
          MatiMartinez
        </NavbarBrand>
        <NavbarToggler className="navbar-toggle" onClick={toggle}>
          <i className={isOpen ? "open" : "close"}></i>
          <i className={isOpen ? "open" : "close"}></i>
          <i className={isOpen ? "open" : "close"}></i>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                tag={RRNavLink}
                to="/proyects"
                onClick={isOpen ? toggle : null}
              >
                Proyectos
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                tag={RRNavLink}
                to="/contact"
                onClick={isOpen ? toggle : null}
              >
                Contacto
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}
