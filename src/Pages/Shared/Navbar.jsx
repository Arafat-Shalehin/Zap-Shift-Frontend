// Navbar.jsx
import { FiArrowUpRight } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center py-5">
      <nav className="w-full bg-white rounded-2xl px-6 md:px-10 py-3 shadow-sm flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* green mark */}
          {/* <span className="w-6 h-6 bg-lime-400 rounded-tl-3xl rounded-br-3xl -rotate-12 inline-block" /> */}
          <img src={logo} alt="Logo" />
          <a href="/" className="mt-3 md:mr-2 -ms-4.5 text-xl font-semibold tracking-wide text-gray-900">
            ZapShift
          </a>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center lg:gap-8 gap-4 text-sm text-gray-500">
          {[
            "Services",
            "Coverage",
            "About Us",
            "Pricing",
            "Blog",
            "Contact",
          ].map((item) => (
            <Link key={item} to={`/${item}`}>
              <button className="hover:text-gray-800 transition-colors duration-150">
                {item}
              </button>
            </Link>
          ))}
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-2">
          <button
            className="px-5 py-2 text-sm text-gray-700 border 
          border-gray-300 md:ml-2 lg:ml-0 rounded-xl bg-white hover:bg-gray-50"
          >
            Sign In
          </button>

          <button className="px-5 py-2 text-sm font-medium text-gray-900 bg-primary rounded-xl hover:bg-lime-300">
            Sign Up
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white">
            <FiArrowUpRight size={16} />
          </button>
        </div>
      </nav>
    </div>
  );
}
