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
      <ProyectCard
        proyectlink="https://matimartinez-mplay.netlify.app/"
        title="MPLAY"
        kit="HTML CSS JAVASCRIPT REACT HOOKS"
        description="We work on analyzing and knowing how to take advantage of the information"
        image={MPlayImg}
        position="left"
        color="#03131f"
        btncolor="#2c4659"
      />
      <ProyectCard
        proyectlink="https://matimartinez-simple-cart.netlify.app/"
        title="Redux Cart"
        kit="HTML CSS JAVASCRIPT REACT HOOKS REDUX MATERIAL-UI"
        description="We work on analyzing and knowing how to take advantage of the information"
        image={SimpleCartImg}
        position="right"
        color="#312502"
        btncolor="#8a7840"
      />
      <ProyectCard
        proyectlink="https://matimartinez-simple-cart.netlify.app/"
        title="El Buen Sabor"
        kit="HTML CSS JAVASCRIPT REACT HOOKS"
        description="We work on analyzing and knowing how to take advantage of the information"
        image={SimpleCartImg}
        position="left"
        color="#310f02"
        btncolor="#8a5540"
      />
      <OtherProyects />
    </div>
  );
}
