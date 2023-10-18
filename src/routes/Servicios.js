import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";


const Servicios = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="SERVICIOS" text="Mika Studio Nails" />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Servicios