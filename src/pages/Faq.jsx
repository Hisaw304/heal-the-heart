// src/pages/Faq.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is Heal the Heart Foundation?",
    answer:
      "Heal the Heart Foundation is a global non-profit organization dedicated to providing humanitarian aid, empowering communities, and restoring dignity to those affected by poverty, disaster, and hardship.",
  },
  {
    question: "Where do you operate?",
    answer:
      "Our work spans across multiple countries, focusing on areas most in need of food security, shelter, healthcare, and education. We also partner with local organizations to maximize impact.",
  },
  {
    question: "How can I make a donation?",
    answer:
      "You can donate securely online through our Donate page using major credit cards, PayPal, or bank transfer. We also accept cryptocurrency contributions.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes. Heal the Heart Foundation is registered as a charitable organization in multiple regions. Your donation may be tax-deductible depending on your country’s laws. Please consult your local tax authority.",
  },
  {
    question: "Can I volunteer with Heal the Heart?",
    answer:
      "Absolutely. We welcome volunteers from all over the world to contribute their skills and time, either remotely or on-site for field projects. Visit our Volunteer page to apply.",
  },
  {
    question: "How do you ensure transparency?",
    answer:
      "We publish annual reports detailing our projects, financials, and outcomes. We maintain strict accountability standards to ensure every contribution is used responsibly.",
  },
];

const Faq = () => {
  return (
    <main className="pt-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="text-center px-6 py-12 bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-900 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Find answers to the most common questions about our work, donations,
          and how you can get involved.
        </p>
      </section>

      {/* FAQ Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-yellow-500 text-2xl mt-1">
                  <FaQuestionCircle />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 text-gray-900 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="mb-6">
          Contact our support team and we’ll be happy to assist you.
        </p>
        <a
          href="/contact"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default Faq;
