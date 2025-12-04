import React from "react";

const SectionTitle = ({ name, span }) => {
  return (
    <h1 className="text-[2rem] font-bold capitalize border-b  pb-2.5 ">
      {" "}
      {name} <span className="text-[#1B3C53]">{span}</span>{" "}
    </h1>
  );
};

export default SectionTitle;
