import React from "react";
import PCard from "./Product-Card/PCard";
import Banner from "../../Constants-C/2-Banner/Banner";
import Pagination from "../../Constants-C/3-Pagination/Pagination";

function HomePage() {
  return (
    <div>
      <Banner />
      <PCard />
      <Pagination />
    </div>
  );
}

export default HomePage;
