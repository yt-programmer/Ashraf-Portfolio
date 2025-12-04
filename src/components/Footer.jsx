import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#456882]">
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-900">
          &copy; {new Date().getFullYear()} Ashraf Portfolio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
