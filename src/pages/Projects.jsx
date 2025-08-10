// src/pages/Projects.jsx
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaGraduationCap,
  FaChild,
  FaUtensils,
  FaHome,
  FaWheelchair,
} from "react-icons/fa";
import mealsImage from "../assets/meals.jpg";
import supportImage from "../assets/support.jpg";
import homesImage from "../assets/homes.jpg";
import communityImage from "../assets/community1.jpg";
import educationImage from "../assets/education1.jpg";
import schoolFeedingImage from "../assets/schoolFeedingImage.jpg";

const impactAreas = [
  {
    icon: <FaHandsHelping className="text-yellow-500 text-4xl" />,
    title: "Poverty Assistance",
    description:
      "Funding outreach programs that bridge opportunity gaps and provide essential support to struggling communities.",
  },
  {
    icon: <FaGraduationCap className="text-yellow-500 text-4xl" />,
    title: "Education Advancement",
    description:
      "Providing scholarships and learning resources to marginalized individuals so they can break the cycle of poverty.",
  },
  {
    icon: <FaChild className="text-yellow-500 text-4xl" />,
    title: "Human Trafficking Assistance",
    description:
      "Supporting programs to fight child exploitation, slavery, and forced servitude across the U.S.",
  },
  {
    icon: <FaUtensils className="text-yellow-500 text-4xl" />,
    title: "Family & Child Hunger",
    description:
      "Funding meal programs to ensure no child’s education is disrupted by an empty stomach.",
  },
  {
    icon: <FaHome className="text-yellow-500 text-4xl" />,
    title: "Homelessness & Shelter",
    description:
      "Helping families and individuals regain stability through emergency shelter and housing initiatives.",
  },
  {
    icon: <FaWheelchair className="text-yellow-500 text-4xl" />,
    title: "Disability Services",
    description:
      "Providing assistive devices, ramps, and resources so people with disabilities can live full, independent lives.",
  },
];

// const signatureProjects = [
//   {
//     title: "Warm Hearts Project",
//     description:
//       "Using donated gift cards to buy clothing, blankets, and bedding for children in need and the homeless.",
//   },
//   {
//     title: "Disability Projects",
//     description:
//       "Purchasing appliances, ramps, and assistive devices to make everyday life accessible for those with disabilities.",
//   },
//   {
//     title: "Toys 4 Joy Project",
//     description:
//       "Buying toys for children in need on birthdays, holidays, or during long hospital stays.",
//   },
//   {
//     title: "Homelessness Initiatives",
//     description:
//       "Partnering with shelters and nonprofits to provide housing and essentials for families on the brink.",
//   },
// ];

const programs = [
  {
    image: mealsImage,
    count: 250000,
    title: "Meals Distributed",
    description:
      "Ensuring food security for vulnerable families and individuals.",
  },
  {
    image: supportImage,
    count: 12000,
    title: "Individuals Supported",
    description:
      "Providing resources and aid to those in need — addressing education and health.",
  },
  {
    image: homesImage,
    count: 400,
    title: "Homes Rebuilt Successfully",
    description:
      "Giving communities access to safe homes and helping families restore lives.",
  },
  {
    image: communityImage,
    count: 850,
    title: "Community Projects Funded",
    description:
      "Supporting local initiatives that strengthen neighborhoods and promote long-term growth.",
  },
  {
    image: educationImage,
    count: 3000,
    title: "Scholarships Awarded",
    description:
      "Helping students from underserved backgrounds access quality education and brighter futures.",
  },
  {
    image: schoolFeedingImage,
    count: 50000,
    title: "School Meals Provided",
    description:
      "Ensuring children can learn and grow with nutritious meals served in schools.",
  },
];

const Projects = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-100 to-yellow-300 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          We Make <span className="text-yellow-600">Investments in Change</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          We collect, combine, and transform overlooked resources — like gift
          cards — into powerful tools for poverty relief, education, and human
          rights. Every card. Every dollar. Every effort counts toward building
          a better future.
        </p>
      </section>

      {/* Mission & Approach */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-gray-700 space-y-6">
        <p>
          Our mission is simple: maximize the value of every donation through
          partnerships, donor match programs, and community initiatives. No
          contribution is too small to spark meaningful change.
        </p>
        <p>
          Beyond our local gift card model, we actively support cause-based
          initiatives that impact lives nationwide — from eradicating hunger to
          empowering survivors of human trafficking.
        </p>
      </section>

      {/* Impact Areas */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Areas We Fund
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {impactAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                {area.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {area.title}
                </h3>
                <p className="mt-2 text-gray-700">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-600 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Be Part of the Change
        </h2>
        {/* <p className="mb-8 max-w-2xl mx-auto">
          Your gift — no matter the size — fuels programs that fight poverty,
          hunger, and injustice. Together, we can create a future filled with
          hope.
        </p> */}
        <p className="mb-8 max-w-3xl mx-auto leading-relaxed">
          Your generosity fuels everything we do. Every contribution — whether
          it’s a financial gift, a donated gift card, or simply sharing our
          mission — helps us reach more families, respond to more emergencies,
          and create more moments of joy in the lives of those who need it most.
          <br />
          <br />
          Change doesn’t happen because one person does everything. It happens
          because all of us do something. Today, you have the power to be that
          “something” for someone in need.
        </p>
        <a
          href="/donate"
          className="bg-white text-yellow-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Donate Now
        </a>
      </section>
      {/* Achievements */}
      <section className="bg-gradient-to-br from-yellow-100 to-yellow-300 py-20 px-6 text-center">
        {/* <h2 className="text-4xl font-bold text-gray-800 mb-16">
          Programs That Change Lives
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {programs.map((prog, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-xl overflow-hidden group"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${prog.image})` }}
              >
                <div className="h-full w-full bg-black/50 flex items-center justify-center">
                  <h3 className="text-4xl text-white font-extrabold drop-shadow-md">
                    <CountUp end={prog.count} duration={2.5} separator="," />+
                  </h3>
                </div>
              </div>
              <div className="p-6 text-left bg-white">
                <h4 className="text-xl font-semibold mb-2 text-yellow-600">
                  {prog.title}
                </h4>
                <p className="text-gray-700">{prog.description}</p>
              </div>
            </div>
          ))}
        </div> */}

        <main className="pt-28 bg-gray-50 min-h-screen">
          {/* Page Title */}
          <section className="text-center max-w-4xl mx-auto px-6 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900"
            >
              Our Impact in Action
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 text-lg text-gray-700"
            >
              From education to hunger relief, Heal the Heart Foundation
              transforms resources into real, measurable change for communities
              worldwide.
            </motion.p>
          </section>

          {/* Programs Grid */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-yellow-500">
                    {program.count.toLocaleString()}
                  </h3>
                  <h4 className="text-lg font-semibold mt-1">
                    {program.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </section>
        </main>
      </section>

      {/* Signature Impact Projects */}
      {/* Our Work Section */}
      <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Our Work: Turning Compassion into Action
        </h2>

        <div className="space-y-16">
          {/* Poverty Assistance */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaHandsHelping className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold text-yellow-600">
                Poverty Assistance Programs
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Poverty remains one of the greatest barriers to opportunity in the
              United States. At Heal the Heart Foundation, we believe every
              person deserves access to the tools, resources, and support that
              can transform their life. Our poverty assistance programs fund
              community outreach, provide essential supplies, and connect
              families with opportunities that might otherwise be out of reach.
              By working closely with local leaders, we ensure every dollar goes
              where it’s needed most, bridging the gap between hardship and
              hope.
            </p>
          </div>

          {/* Education Advancement */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold text-yellow-600">
                Education Advancement Projects
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Education is the single most powerful tool for breaking the cycle
              of poverty. We fund scholarships, provide learning materials, and
              create programs that open doors for students from underserved
              communities. Many of the individuals we support are the first in
              their families to attend college or pursue higher education. We
              believe that when a student succeeds, their entire community is
              lifted with them.
            </p>
          </div>

          {/* Human Trafficking */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaChild className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold text-yellow-600">
                Human Trafficking Assistance
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Human trafficking is a crime that hides in plain sight. From child
              exploitation to forced labor, it destroys lives and robs
              individuals of their freedom. Heal the Heart Foundation partners
              with specialized organizations across the U.S. to fund rescue
              missions, survivor care programs, and prevention education. Every
              contribution helps us restore dignity, hope, and safety to
              survivors of this modern-day slavery.
            </p>
          </div>

          {/* Family & Child Hunger */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaUtensils className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold text-yellow-600">
                Family & Child Hunger Programs
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              No child should have to go to bed hungry. Yet for many families
              living on the edge, hunger is a daily reality. We provide funding
              for meal programs in schools, food banks, and community kitchens.
              By removing the barrier of hunger, we give children the chance to
              focus on learning, playing, and simply being kids.
            </p>
          </div>

          {/* Homelessness & Shelter */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaHome className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold text-yellow-600">
                Homelessness & Shelter Initiatives
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A safe place to sleep is the foundation for rebuilding a life. We
              work with shelters, transitional housing programs, and outreach
              organizations to help families and individuals find stability. Our
              goal isn’t just to provide shelter for a night, but to create a
              pathway toward long-term security and independence.
            </p>
          </div>

          {/* Disability Services */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaWheelchair className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold text-yellow-600">
                Disability Services Assistance
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Disability should never mean limitation. We help fund projects
              that provide mobility aids, home accessibility improvements, and
              other essential resources for individuals living with
              disabilities. From wounded veterans to children with special
              needs, our mission is to make sure every person has the tools to
              lead a fulfilling and independent life.
            </p>
          </div>

          {/* Warm Hearts Project */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaHandsHelping className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold text-yellow-600">
                Warm Hearts Project
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A warm blanket on a cold night can mean the difference between
              enduring and surviving. Through donated retailer gift cards, we
              purchase shoes, clothing, blankets, and bedding for children, the
              homeless, and individuals struggling with daily needs. We work
              closely with shelters, faith groups, and local nonprofits to
              ensure these essentials go directly to those who need them most.
            </p>
          </div>

          {/* Disability Projects */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaWheelchair className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold text-yellow-600">
                Disability Support Projects
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Disability should never mean disconnection. We use donated
              retailer gift cards to buy appliances, building materials for
              ramps, and assistive devices for individuals with mobility or
              health challenges. Collaborating with partners like Habitat for
              Humanity and local hardware retailers, we help create independence
              and dignity in everyday life.
            </p>
          </div>

          {/* Toys 4 Joy Project */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaChild className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold text-yellow-600">
                Toys 4 Joy Project
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Every child deserves joy — especially on birthdays and holidays.
              Toys 4 Joy uses specific merchant gift cards to buy toys for
              children in need, including those in hospitals for extended stays.
              A simple gift can turn a difficult day into a moment of happiness
              and hope.
            </p>
          </div>

          {/* Homelessness Assistance */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaHome className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold text-yellow-600">
                Homelessness Assistance
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              For families living on the edge, one hardship can push them into
              homelessness. We fund programs that provide emergency shelter,
              transitional housing, and resources to help people stabilize and
              rebuild their lives. Every effort brings someone closer to a safe
              place to call home.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
