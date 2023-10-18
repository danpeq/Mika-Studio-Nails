import React from "react";
import "./HeroImgStyle.css"
import IntroImg from "../assets/intro1.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img 
          className="intro-img" 
          src={IntroImg} 
          alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hola! somos</p>
        <h1>Mika Studio Nails</h1>
        <div>
          <Link to="/servicios" className="btn">Servicios</Link>
          <Link to="/about" className="btn btn-light">Nosotros</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;