import React from "react";
import CountUp from "react-countup";

// Importing images from assets
import mealsImage from "../assets/meals.jpg";
import supportImage from "../assets/support.jpg";
import homesImage from "../assets/homes.jpg";

const programs = [
  {
    image: mealsImage,
    count: 250000,
    title: "Meals Distributed",
    description:
      "Ensuring food security for vulnerable families and individuals.",
  },
  {
    image: supportImage,
    count: 12000,
    title: "Individuals Supported",
    description:
      "Providing resources and aid to those in need. Addressing education and health.",
  },
  {
    image: homesImage,
    count: 400,
    title: "Homes Rebuilt Successfully",
    description:
      "Giving communities access to safe homes and helping families restore lives.",
  },
];

const Program = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-100 to-yellow-300 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-16">
        Programs That Change Lives
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {programs.map((prog, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden group"
          >
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${prog.image})` }}
            >
              <div className="h-full w-full bg-black/50 flex items-center justify-center">
                <h3 className="text-4xl text-white font-extrabold drop-shadow-md">
                  <CountUp end={prog.count} duration={2.5} separator="," />+
                </h3>
              </div>
            </div>
            <div className="p-6 text-left bg-white">
              <h4 className="text-xl font-semibold mb-2 text-yellow-600">
                {prog.title}
              </h4>
              <p className="text-gray-700">{prog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
