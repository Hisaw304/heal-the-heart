import React from "react";
import { FaHeart, FaHandsHelping, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaHeart />,
    title: "Compassion",
    description:
      "We offer care with empathy, love, and respect to every heart we touch.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community",
    description:
      "We believe in building strong, supportive communities that uplift one another.",
  },
  {
    icon: <FaLightbulb />,
    title: "Empowerment",
    description:
      "We provide tools and support for individuals to rebuild their lives with confidence.",
  },
];

const Mission = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-gray-50">
      {/* Title & Description */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Our <span className="text-yellow-400">Mission</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          At Heal the Heart Foundation, our mission is to restore hope and
          healing by reaching out with compassion, empowering communities, and
          creating lasting change for those in need.
        </p>
      </div>

      {/* Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-yellow-400 text-4xl mb-4 mx-auto">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 mx-auto">
                {item.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
