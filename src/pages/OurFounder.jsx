// src/pages/OurFounder.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import founderImage from "../assets/founder.jpg";

const OurFounder = () => {
  return (
    <main className="pt-28 bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            The Heart Behind{" "}
            <span className="text-yellow-400">Heal the Heart</span>
          </h1>
          <p className="text-lg text-gray-700 mb-4 italic">
            “We don't just provide help — we restore dignity. Healing begins in
            the heart.”
          </p>
          <p className="text-sm text-gray-600 font-medium mb-6">
            — <strong>Thomas Rickdale</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/projects"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              See Our Projects
            </Link>
            <Link
              to="/donate"
              className="inline-block border border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-6 py-3 rounded-lg shadow-sm transition-all"
            >
              Donate / Support
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex justify-center items-start"
        >
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
            <img
              src={founderImage}
              alt="Thomas Rickdale"
              loading="lazy"
              className="w-full h-80 object-cover md:h-[500px] object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* Long Story */}
      <section className="max-w-5xl mx-auto px-6 md:px-0 py-10 md:py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg prose-slate mx-auto"
        >
          <h2 className="text-yellow-500">
            The Journey That Became a Movement
          </h2>

          <p>
            My name is <strong>Thomas Rickdale</strong>. I founded Heal the
            Heart Foundation with one simple belief: no wound is beyond healing
            when a community decides to act with compassion and dignity. The
            seed of this work was planted years before the nonprofit existed —
            in quiet moments volunteering at local shelters, delivering meals,
            and listening to stories that the world often overlooks.
          </p>

          <h3 className="text-yellow-500">The Turning Point</h3>
          <p>
            One winter night at a local shelter, I met a young girl named{" "}
            <em>Samantha</em>. She did not ask for toys or prizes — she asked
            for a warm blanket. That small but urgent need crystallized
            something for me: charity must be personal. Needs are not abstract —
            they have a name, a face, and a story. From that night forward Heal
            the Heart would prioritize meeting human needs directly, quickly,
            and with dignity.
          </p>

          <h3 className="text-yellow-500">How We Work</h3>
          <ul>
            <li>
              <strong>Meet the need directly.</strong> If someone needs food or
              shelter, we mobilize without delay.
            </li>
            <li>
              <strong>See the person first.</strong> Every response honors the
              dignity of the individual, not just the label of a problem.
            </li>
            <li>
              <strong>Leverage community talents.</strong> Everyone has
              something to give — time, skills, networks, or resources — and we
              harness that power.
            </li>
            <li>
              <strong>Operate with transparency.</strong> Donors and volunteers
              can see the impact of their contributions.
            </li>
          </ul>

          <h3 className="text-yellow-500">
            From Small Beginnings to Real Impact
          </h3>
          <p>
            We started with a handful of volunteers and a simple idea: small
            resources — even leftover gift card balances, a coat, or a volunteer
            hour — can be combined to create meaningful outcomes. That approach
            has allowed us to run programs across poverty assistance, education,
            hunger relief, homelessness prevention, disability services, and
            survivor support.
          </p>

          <h3 className="text-yellow-500">Lessons Learned</h3>
          <p>
            Running a grassroots charity taught me humility. Some nights I
            doubted whether we could keep going. Yet every time I met someone
            whose life had been changed — a child fed, a family rehoused, a
            survivor supported — those doubts were replaced by resolve. Most
            people want to help; they just need a simple, trusted way to do it.
          </p>

          <h3 className="text-yellow-500">Our Vision Forward</h3>
          <p>
            I envision a network of communities linked by compassion — where
            help is immediate, personal, and effective. Heal the Heart aims to
            scale local solutions without losing the personal focus that makes
            them work: seeing a person, learning their need, and applying the
            right support at the right time.
          </p>

          <h3 className="text-yellow-500">A Personal Invitation</h3>
          <p>
            If there’s one invitation I can offer, it’s this: join us. You do
            not need grand resources or special training — just a willingness to
            act. Volunteer. Donate. Share a story. Meet a need. In doing so you
            become part of a movement that values human dignity above all.
          </p>

          <p className="font-semibold">Thank you for believing in healing,</p>
          <p className="font-bold">
            Thomas Rickdale
            <br />
            Founder | Heal the Heart Foundation
          </p>
        </motion.article>
      </section>

      {/* Quote / Highlight */}
      <section className="bg-yellow-400 text-black py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-semibold italic"
          >
            “Small acts of kindness, done consistently, heal more than we
            imagine.”
          </motion.blockquote>
          <p className="mt-4 font-medium">— Thomas Rickdale</p>
        </div>
      </section>
    </main>
  );
};

export default OurFounder;
