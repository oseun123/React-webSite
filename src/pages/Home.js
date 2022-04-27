import React from "react";
import Banner from "../components/Banner";
import Bikes from "../components/Bikes";
import Desc from "../components/Desc";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Slider />
      <Bikes />
      <Desc />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
