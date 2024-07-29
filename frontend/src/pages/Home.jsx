import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FreeCategory from "../components/FreeCategory";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeCategory />
      <Footer />
    </>
  );
}

export default Home;
