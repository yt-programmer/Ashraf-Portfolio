import React from "react";
import Home from "./Home";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <section className="font-display">
      <Header />
      <Home />
    </section>
  );
};

export default MainLayout;
