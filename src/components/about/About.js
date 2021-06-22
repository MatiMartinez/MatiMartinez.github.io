import React, { useEffect } from "react";
import "./About.css";

import { AiFillFilePdf } from "react-icons/ai";
import EditVideoImg from "../../assets/edit-video.jpg";
import ClassroomImg from "../../assets/classroom.jpg";
import DeveloperImg from "../../assets/developer.jpg";

import Pdf from "../../docs/Matias-Martinez.pdf";

export default function About() {
	useEffect(() => {
		document.getElementById("main-about").style.opacity = "1";
	}, []);

	return (
		<article className="main-about container" id="main-about">
			<section className="about-title">
				<h1>Mati Martinez</h1>
				<h2>FRONT-END DEVELOPER JUNIOR | MENDOZA - ARGENTINA</h2>
				<p>
					Hola! Soy <b>Matias</b>, Desarrollador Junior, tengo un gran interés en
					Front-End, React y JavaScript.
				</p>
			</section>
			<section className="about-cv">
				<a
					href={Pdf}
					className="about-a-cv"
					without
					rel="noopener noreferrer"
					target="_blank"
					type="application/pdf"
				>
					<AiFillFilePdf className="pdf-icon mr-2" size="1.5rem" />
					<p className="m-0 p-0">Curriculum Vitae</p>
				</a>
			</section>
			<section className="about-content">
				<div className="row about-row">
					<div className="col-12 col-md-6 col-lg-4 about-col">
						<p>
							En mis años de secundaria solía editar mis propios videos con
							herramientas como Sony Vegas Pro o Adobe After Effects
						</p>
						<img src={EditVideoImg} alt="col-img" className="img-fluid" />
					</div>
					<div className="col-12 col-md-6 col-lg-4 about-col">
						<img src={ClassroomImg} alt="col-img" className="img-fluid" />
						<p>
							Sin tener un objetivo claro en mente, comence a estudiar
							<b> Arte y Diseño Multimedial</b> por el hecho de hacer algo que me
							gustaba. Aqui fue mi primer acercamiento al <b>Desarrollo Web </b>
							ya que aprendi a maquetar mis primeras webs
						</p>
					</div>
					<div className="col-12 col-md-8 col-lg-4 about-col">
						<img src={DeveloperImg} alt="col-img" className="img-fluid" />
						<p>
							Luego de 1 año de estudio, decidi cambiar mi rumbo y estudiar la
							Tecnicatura en Programación en la Universidad Tecnológica Nacional.
						</p>
					</div>
				</div>
			</section>
		</article>
	);
}
