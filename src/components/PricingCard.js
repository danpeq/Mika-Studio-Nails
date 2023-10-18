import React from "react";
import "./PricingCardStyle.css";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";


const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Esmaltado en Gel -</h3>
          <span className="bar"></span>
          <p className="btc">s/. 35</p>
            <ReactWhatsapp number="+51956711536" target="_blank"    className="btn" message="Hola Mika Nails, quiero un Esmaltado en Gel">
              RESERVA TU CITA
            </ReactWhatsapp>
        </div>

        <div className="card">
          <h3>- Esmaltado en Gel Francesa o Diseño -</h3>
          <span className="bar"></span>
          <p className="btc">s/. 40</p>
            <ReactWhatsapp number="+51956711536" target="_blank" className="btn" message="Hola Mika Nails, quiero un Esmaltado en Gel Francesa o Diseño">
              RESERVA TU CITA
            </ReactWhatsapp>
        </div>

        <div className="card">
          <h3>- Fortalecimiento Base Rubber -</h3>
          <span className="bar"></span>
          <p className="btc">s/. 60</p>
            <ReactWhatsapp number="+51956711536" target="_blank" className="btn" message="Hola Mika Nails, quiero un Fortalecimiento Base Rubber">
              RESERVA TU CITA
            </ReactWhatsapp>
        </div>

        <div className="card">
          <h3>- Extension en Soft Gel -</h3>
          <span className="bar"></span>
          <p className="btc">s/. 80</p>
            <ReactWhatsapp number="+51956711536" target="_blank" className="btn" message="Hola Mika Nails, quiero una Extension en Soft Gel">
              RESERVA TU CITA
            </ReactWhatsapp>
        </div>

        <div className="card">
          <h3>- Retiro de Esmaltado -</h3>
          <span className="bar"></span>
          <p className="btc">s/. 10</p>
            <ReactWhatsapp number="+51956711536" target="_blank" className="btn" message="Hola Mika Nails, quiero un Retiro de Esmaltado">
              RESERVA TU CITA
            </ReactWhatsapp>
        </div>

        <div className="card">
          <h3>- Retiro de Acrilico -</h3>
          <span className="bar"></span>
          <p className="btc">s/. 20</p>
            <ReactWhatsapp number="+51956711536" target="_blank" className="btn" message="Hola Mika Nails, quiero un Retiro de Acrilico">
              RESERVA TU CITA
            </ReactWhatsapp>
        </div>
      </div>
    </div>
  );
}

export default PricingCard
