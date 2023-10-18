import React from "react";
import "./FooterStyle.css"
import { FaGithub, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaTiktok } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome 
              size={20} 
              style={{ color: "#fff", marginRight: "2rem" }}/>
            <div>
              <p>Cajamarca, Peru</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone 
                  size={20} 
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
          956711536</h4>

          </div>
          <div className="email">
            <h4><FaMailBulk 
                  size={20} 
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
            kassia_s7@hotmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Dale click!</h4>
          <p>
            Estas son las redes sociales en las que nos puedes encontrar
          </p>
          <div className="social">
              <a 
                target="_blank" 
                href="https://www.instagram.com/mika.studionails/"
              >
               <FaInstagram             
                size={30} 
                style={{ color: "#fff", marginRight: "1rem" }}
              /> 
              </a>
              
              <a 
                target="_blank" 
                href="https://www.tiktok.com/@mika.nails1"
              >
                <FaTiktok 
                size={30} 
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer