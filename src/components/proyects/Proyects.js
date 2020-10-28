import React, { useEffect } from "react";
import "./Proyects.css";

import ProyectCard from "./ProyectCard/ProyectCard";
import OtherProyects from "./OtherProyects/OtherProyects";

import MPlayImg from "../../assets/mplay.svg";
import SimpleCartImg from "../../assets/simple-cart.svg";

export default function Proyects() {
  useEffect(() => {
    document.getElementById("main-proyects").style.opacity = "1";
  }, []);
  return (
    <div className="main-proyects" id="main-proyects">
      <div className="container proyects-title">
        <h1>Proyectos</h1>
        <p>
          Esta es una selección de alguno de mis proyectos, donde práctico con
          mis habilidades de desarrollo frontend y donde puedes ver mis
          conocimientos.
        </p>
        <hr />
      </div>
      <ProyectCard
        proyectlink="https://matimartinez-mplay.netlify.app/"
        title="MPLAY"
        kit="HTML CSS JAVASCRIPT REACT HOOKS MONGO NODE"
        description="Pequeña web para guardar películas"
        image={MPlayImg}
        position="left"
        color="#03131f"
        btncolor="#2c4659"
      />
      <ProyectCard
        proyectlink="https://matimartinez-simple-cart.netlify.app/"
        title="Redux Cart"
        kit="HTML CSS JAVASCRIPT REACT HOOKS REDUX MATERIAL-UI"
        description="Carrito de compras simple, practicando el uso de React-Redux y improvisando con Responsive Web."
        image={SimpleCartImg}
        position="right"
        color="#312502"
        btncolor="#8a7840"
      />
      {/*<ProyectCard
        proyectlink="https://matimartinez-simple-cart.netlify.app/"
        title="El Buen Sabor"
        kit="HTML CSS JAVASCRIPT REACT HOOKS"
        description="We work on analyzing and knowing how to take advantage of the information"
        image={SimpleCartImg}
        position="left"
        color="#310f02"
        btncolor="#8a5540"
      />*/}
      <div className="container other-proyects-title mt-5">
        <h1>Desafíos</h1>
        <p>
          Una serie de desafíos frontend encontrados en internet o de{" "}
          <a
            href="https://www.frontendmentor.io/profile/MatiMartinez"
            target="_blank"
            rel="noopener noreferrer"
            className="link-black"
          >
            <b>FrontendMentor.io</b>
          </a>
        </p>
        <hr />
      </div>
      <OtherProyects />
    </div>
  );
}
