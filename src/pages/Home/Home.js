import React from "react";
import Cardboxes from "../../components/cardboxes/Cardboxes";
import Cards from "../../components/cards/Cards";
import Hero from "../../components/hero/Hero";
function Home() {
  return (
    <div className="home">
      <Hero />
      <Cardboxes />
      <Cards />
    </div>
  );
}

export default Home;
