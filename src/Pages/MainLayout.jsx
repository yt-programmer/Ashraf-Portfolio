import React from "react";
import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <section className="font-display overflow-x-hidden">
      <Header />
      <Home />
      <Footer />
    </section>
  );
};

export default MainLayout;
