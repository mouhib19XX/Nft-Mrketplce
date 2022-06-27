import React from "react";
import Common from "./Common.jsx";
import img2 from "./img2.png";

function About() {
  return (
    <>
      <Common
        
        imgsrc={img2}
        visit="/Contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;