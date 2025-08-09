import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Logo Section */}
        <div>
          <h3 className="text-2xl font-bold mb-3">
            <span className="text-yellow-400 text-3xl">H</span>eal the Heart
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Empowering lives through generosity and compassion. Together, we
            rebuild hope and restore hearts around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-yellow-400">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-yellow-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/donate" className="hover:text-yellow-400 transition">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-yellow-400">
            Connect With Us
          </h4>
          <p className="text-sm text-gray-300 mb-3">
            Email:{" "}
            <a
              href="mailto:info@healtheheart.org"
              className="hover:text-yellow-400"
            >
              info@healtheheart.org
            </a>
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 text-lg transition transform hover:scale-110"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 text-lg transition transform hover:scale-110"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 text-lg transition transform hover:scale-110"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="mailto:info@healtheheart.org"
              className="hover:text-yellow-400 text-lg transition transform hover:scale-110"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 px-4">
        © {new Date().getFullYear()} Heal the Heart Foundation. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
