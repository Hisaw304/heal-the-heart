import React from "react";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Donate from "../components/Donate";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonilas";
import HowItWorks from "../components/HowItWorks";
import InfoBlock from "../components/InfoBlock";

const Home = () => {
  return (
    <>
      <Hero />
      <Programs />
      <Donate />
      <Mission />
      <HowItWorks />
      <Testimonials />
      <InfoBlock />
    </>
  );
};

export default Home;
