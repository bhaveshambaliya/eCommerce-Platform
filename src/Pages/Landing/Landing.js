import React, { useEffect } from "react";
import About from "./About";
import CustomerAbt from "./CustomerAbt";
import Finance from "./Finance";
import Home from "./Home";

function Landing() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <Home />
      <About />
      <Finance />
      <CustomerAbt />
    </>
  );
}

export default Landing;
