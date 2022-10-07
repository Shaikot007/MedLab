import React from "react";
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Carousel';
import Tests from '../Tests/Tests';

function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Tests />
    </div>
  );
}

export default Home;
