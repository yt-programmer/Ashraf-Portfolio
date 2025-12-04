import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";

const Home = () => {
  const styleSection =
    "min-h-screen flex flex-col gap-15 items-center  py-[100px]";
  return (
    <div className="relative">
      <Hero />
      <About styleSection={styleSection} />
    </div>
  );
};

export default Home;
