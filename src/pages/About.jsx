// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import communityImage from "../assets/community.jpg"; // Imported community image

const About = () => {
  return (
    <main className="pt-28 bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="text-center px-6 md:px-20 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-black mb-4"
        >
          About <span className="text-yellow-400">Heal the Heart</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 max-w-3xl mx-auto"
        >
          We are a nonprofit committed to mending lives through compassion,
          support, and sustainable impact. Our story is rooted in hope — and
          built on action.
        </motion.p>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We envision a world where no one suffers in silence — where
              individuals and families receive not just relief, but genuine care
              and empowerment to rebuild their lives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every initiative we launch reflects our belief in dignity, equity,
              and the healing power of community.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src={communityImage}
            alt="Community support and togetherness"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover border border-gray-100"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-black mb-4"
          >
            Our <span className="text-yellow-400">Core Values</span>
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are guided by principles that ensure our efforts are impactful,
            ethical, and sustainable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Compassion",
              desc: "We approach every story with empathy, ensuring people feel seen and valued.",
            },
            {
              title: "Transparency",
              desc: "We maintain honesty in our operations, funding, and impact reporting.",
            },
            {
              title: "Collaboration",
              desc: "We work hand-in-hand with local communities and partners for sustainable results.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-yellow-400 text-black py-16 px-6 md:px-24 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-4"
          >
            Join our mission to heal hearts, one act of kindness at a time.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg font-medium"
          >
            Whether you volunteer, donate, or spread awareness — your support
            helps us build a better world.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default About;
