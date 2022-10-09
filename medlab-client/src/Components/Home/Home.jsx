import React from "react";
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Carousel';
import Tests from '../Tests/Tests';
import Health from '../Health/Health';
import Features from '../Features/Features';

function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Tests />
      <Health />
      <Features />
    </div>
  );
}

export default Home;
