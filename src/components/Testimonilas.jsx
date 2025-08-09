import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import testimonialsImage from "../assets/testimonials-bg.jpg";
import "swiper/css";
import "swiper/css/pagination";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person5.jpg";
import person5 from "../assets/person5.jpg";
// import "../styles/testimonials.css"; // optional if you want more custom styles

const testimonials = [
  {
    name: "Emily Carter",
    role: "Food Aid Recipient",
    image: person1,
    text: "Heal the Heart Foundation provided meals when my family had nothing. Their kindness changed our lives and gave us hope during a dark time.",
  },
  {
    name: "Michael Johnson",
    role: "Rebuilt Home Beneficiary",
    image: person2,
    text: "After a natural disaster destroyed everything, this foundation helped rebuild our home. I’ll never forget the day we moved back in.",
  },
  {
    name: "Sofia Martinez",
    role: "Education Support",
    image: person3,
    text: "Thanks to their scholarship aid, I stayed in school. Now I’m working toward a better future. I’m forever grateful!",
  },
  {
    name: "James O’Neill",
    role: "Volunteer",
    image: person4,
    text: "Volunteering here has been the most rewarding experience of my life. I’ve seen real impact and real stories of transformation.",
  },
  {
    name: "Grace Thompson",
    role: "Senior Support Recipient",
    image: person5,
    text: "As a senior living alone, I was isolated. This foundation gave me companionship, meals, and warmth. It saved my spirit.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${testimonialsImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto px-4 text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Stories That Touch the Heart
        </h2>
        <p className="mb-12 text-lg text-gray-200">
          Hear directly from the people whose lives have been transformed
          through your kindness.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white text-gray-800 rounded-lg shadow-xl p-8 max-w-2xl mx-auto"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400 mb-4"
                  />
                  <p className="text-lg italic text-gray-700 mb-4">
                    "{item.text}"
                  </p>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;
