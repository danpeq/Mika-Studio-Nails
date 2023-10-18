import React from "react";
import "./AboutContentStyle.css"
import { Link } from "react-router-dom";
import Nails2 from "../assets/nails2.jpeg"
import Nails1 from "../assets/nails1.jpeg"
import ReactWhatsapp from "react-whatsapp"; 

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>¿Quienes somos?</h1>
        <p>Somos Mika Studio Nails, un estudio de manicura especializado en gel. Nos enfocamos en crear momentos de autoexpresión como forma de autocuidado. Nuestras manos hacen mucho por nosotros todos los días.</p> <p>Creemos que cuidar nuestras uñas intencionalmente nos ayuda a reducir la sobrecarga y apoyarnos en nuestra creatividad para ser la mejor versión de nosotros mismos.</p>

          <ReactWhatsapp number="+51956711536" target="_blank"      className="btn" message="Hola Mika Nails, quiero una cita">
              Escribenos
          </ReactWhatsapp>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img 
              src={Nails2} 
              className="img" 
              alt="true"/>
          </div>
          <div className="img-stack bottom">
            <img 
              src={Nails1} 
              className="img" 
              alt="true"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent