import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaQuestionCircle,
  FaUserFriends,
  FaEnvelopeOpenText,
  FaComments,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
// import { faqs } from "../data/faqData"; // adjust path if needed

const faqs = [
  {
    question: "How can I donate to your cause?",
    answer:
      "You can donate securely through our website's Donate page using card, PayPal, or direct bank transfer.",
  },
  {
    question: "Are donations tax deductible?",
    answer:
      "Yes, all donations are tax-deductible to the fullest extent allowed by law. We provide receipts for every donation.",
  },
  {
    question: "How are donations used?",
    answer:
      "We allocate funds toward urgent medical aid, food programs, education, and long-term recovery projects.",
  },
  {
    question: "Can I volunteer with the organization?",
    answer:
      "Absolutely. Visit our Get Involved page to learn about volunteer opportunities in your region.",
  },
  {
    question: "How do I know my donation made an impact?",
    answer:
      "We send regular updates and stories from the field, plus you can view our annual impact report.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-left space-y-4 mb-6">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-3">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left text-lg font-medium text-black focus:outline-none"
          >
            {faq.question}
            {openIndex === index ? (
              <FaMinus className="text-yellow-400" />
            ) : (
              <FaPlus className="text-yellow-400" />
            )}
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-700 text-base mt-2"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const InfoBlock = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-10 space-y-20 border-t border-gray-100">
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10"
      >
        <div>
          <h2 className="text-4xl font-bold mb-4 text-black">Who We Are</h2>
          <p className="text-gray-700 text-lg mb-6">
            At Heal the Heart Foundation, we’re committed to transforming lives
            with compassion, resilience, and purpose. Learn how we began, what
            we believe, and where we’re headed as a force for global good.
          </p>
          <Link
            to="/about"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Learn More
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <FaUserFriends className="text-yellow-400 text-8xl drop-shadow-lg" />
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10"
      >
        <div className="flex justify-center md:justify-start">
          <FaQuestionCircle className="text-yellow-400 text-8xl drop-shadow-lg" />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4 text-black">
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
          <Link
            to="/faq"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Still Have Questions */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-yellow-50 py-14 rounded-lg shadow-md px-6 md:px-10"
      >
        <div className="max-w-3xl mx-auto text-center">
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
    </section>
  );
};

export default InfoBlock;
