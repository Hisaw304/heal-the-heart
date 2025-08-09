import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg"; // Make sure this path is correct

const Hero = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="text-yellow-400 text-6xl md:text-7xl font-black">
            H
          </span>
          <span className="ml-1">eal the Heart Foundation</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Restoring hope, rebuilding lives. Together, we create lasting change.
        </p>

        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <Link
            to="/donate"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
          >
            Donate Now
          </Link>
          <Link
            to="/about"
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
