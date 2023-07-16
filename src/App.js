import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import "./styles/Style.css";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a 1-second delay to show loading state
  //   const loadingTimeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(loadingTimeout);
  // }, []);

  // if (loading) {
  //   // Show the loader in the middle of the screen
  //   return (
  //     <div className="loader-container">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="layout">
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
