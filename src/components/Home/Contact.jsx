import React from "react";
import SectionTitle from "../SectionTitle";
const data = [
  {
    id: 1,

    contact: "+201025913655",
  },
  {
    id: 2,

    contact: "https://wa.me/+201025913655",
  },
];
const Contact = ({ styleSection }) => {
  return (
    <section className={styleSection} id="contact">
      <SectionTitle name="Get in" span="Touch" />
      <div className="container px-[20px] mx-auto">
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className="mb-4 text-lg flex items-center gap-4 shadow-2xl p-4 rounded-md hover:bg-gray-100 transition-all hover:translate-y-[5px] duration-500  "
            >
              {item.id === 2 ? (
                <a
                  href={item.contact}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Call me on WhatsApp
                </a>
              ) : (
                <span>{item.contact}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
