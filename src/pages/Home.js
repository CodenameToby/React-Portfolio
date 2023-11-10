import React from 'react';
import Contact from "../components/Contact";
import About from "../components/About";
import PortfolioContainer from "../components/PortfolioContainer";



function Home() {
  return (
    <div className='home'>
      <h1>Home Page</h1>
      <p>
        <Contact />
        <About />
        <PortfolioContainer />
      </p>
    </div>
  );
}

export default Home;