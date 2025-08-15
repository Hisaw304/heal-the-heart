// src/pages/Crypto.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBitcoin, FaEthereum, FaLock, FaRegHandshake } from "react-icons/fa";

const Crypto = () => {
  return (
    <main className="pt-20 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            Empower Change with{" "}
            <span className="text-gray-900">Crypto Donations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto mb-8"
          >
            We use crypto donations to fight poverty, human trafficking, hunger,
            homelessness, and disability — making global impact faster and more
            transparently than ever before.
          </motion.p>
          <motion.a
            href="/donate"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Donate Crypto
          </motion.a>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Why Crypto Matters for Charity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-gray-700 mb-12"
        >
          Blockchain-based donations allow us to reach communities faster,
          reduce transaction costs, and provide full transparency on how your
          gift is used — ensuring more resources go directly to those in need.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <FaBitcoin />,
              title: "Bitcoin",
              desc: "The world’s first and largest cryptocurrency.",
            },
            {
              icon: <FaEthereum />,
              title: "Ethereum",
              desc: "Smart contracts and decentralized impact giving.",
            },
            {
              icon: <FaLock />,
              title: "Secure",
              desc: "End-to-end encryption for safe transactions.",
            },
            {
              icon: <FaRegHandshake />,
              title: "Transparent",
              desc: "Blockchain ensures every donation is trackable.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border border-gray-100"
            >
              <div className="text-yellow-500 text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Donate Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            How to Donate Crypto
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                step: "1",
                title: "Choose Your Crypto",
                desc: "We currently accept Bitcoin, Ethereum, and other major cryptocurrencies.",
              },
              {
                step: "2",
                title: "Send to Our Wallet",
                desc: "Use the secure wallet address provided after clicking the donate button.",
              },
              {
                step: "3",
                title: "Get Your Receipt",
                desc: "Receive an instant confirmation and donation receipt for your records.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100"
              >
                <div className="text-yellow-500 text-3xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-yellow-500 text-gray-900 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-4"
        >
          Ready to Make an Impact with Crypto?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 max-w-2xl mx-auto"
        >
          Your donation fuels projects that restore dignity, fight injustice,
          and create lasting change. Join the movement today.
        </motion.p>
        <motion.a
          href="/donate"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Donate Crypto
        </motion.a>
      </section>
    </main>
  );
};

export default Crypto;
