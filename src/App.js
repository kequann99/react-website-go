import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import WhatWeDo from "./components/WhatWeDo";
import Results from "./components/Results";
import WhatClientsSay from "./components/WhatClientsSay";
import ClientLogos from "./components/ClientLogos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // Each section of the page is seperated into a component for easier changes to each section later on
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <WhatWeDo />
      <Results />
      <WhatClientsSay />
      <ClientLogos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
