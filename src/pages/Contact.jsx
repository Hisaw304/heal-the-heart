// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelopeOpenText,
  FaComments,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="pt-24 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20 px-6 text-center text-black">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg"
        >
          Whether you want to volunteer, donate, or just say hello — we’re here
          to listen and help.
        </motion.p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 mb-8">
            Reach out to us directly through phone, email, or visit our office.
            We’d love to hear from you.
          </p>

          <div className="flex items-center gap-4">
            <FaEnvelopeOpenText className="text-yellow-500 text-2xl" />
            <span className="text-gray-800">support@healtheheart.org</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-yellow-500 text-2xl" />
            <span className="text-gray-800">+1 (234) 567-890</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
            <span className="text-gray-800">
              123 Kindness Street, Hope City, USA
            </span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-xl p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition w-full"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Still Have Questions */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-yellow-50 py-14 rounded-lg shadow-md px-6 md:px-10 max-w-4xl mx-auto mb-20"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Still Have <span className="text-yellow-500">Questions?</span>
          </h3>
          <p className="text-gray-700 text-lg mb-8">
            Whether you're looking to get involved, support a cause, or just
            need clarity — we’re here for you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition"
            >
              <FaEnvelopeOpenText />
              Contact Support
            </Link>

            <button
              onClick={() => alert("Live chat coming soon...")}
              className="inline-flex items-center justify-center gap-2 border border-yellow-400 text-yellow-500 px-6 py-3 rounded-md font-medium hover:bg-yellow-100 transition"
            >
              <FaComments />
              Live Chat
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Contact;
