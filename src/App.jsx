// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Donate from "./pages/Donate";
import Crypto from "./pages/Crypto";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import AdminSettings from "./pages/AdminSettings";
import OurFounder from "./pages/OurFounder";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourfounder" element={<OurFounder />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminSettings />} />
      </Routes>
    </Layout>
  );
};

export default App;
