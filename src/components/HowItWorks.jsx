import React from "react";
import { FaUsers, FaDonate, FaBuilding, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaUsers />,
    title: "Nonprofits Join",
    description:
      "Trusted nonprofits around the world apply to access funding, skills, and connections.",
  },
  {
    icon: <FaDonate />,
    title: "People Donate",
    description:
      "Supporters like you give to causes they care about, fueling meaningful change.",
  },
  {
    icon: <FaBuilding />,
    title: "Companies Support",
    description:
      "Brands amplify impact through grants, donations, and global partnerships.",
  },
  {
    icon: <FaGlobe />,
    title: "Impact Delivered",
    description:
      "Nonprofits grow stronger, feedback is heard, and communities thrive worldwide.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          How It <span className="text-yellow-400">Works</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          From joining to creating impact — here’s how we connect communities to
          real change.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 text-3xl">
              {step.icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
